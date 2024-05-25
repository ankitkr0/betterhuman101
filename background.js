const GROQ_API_KEY = '';

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('reminder', { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener(async function(alarm) {
  if (alarm.name === 'reminder') {
    chrome.storage.sync.get(['name', 'goals', 'habits'], async function(data) {
      console.log('Alarm triggered:', data);
      try {
        const response = await fetch('https://api.groq.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
          },
          body: JSON.stringify({
            "messages": [
              {
                "role": "system",
                "content": `Generate a reminder for ${data.name} to eat, hydrate, and stretch based on their goals: ${data.goals} and habits: ${data.habits}\n\nKeep it to less than 10 words. Make it hyper personal. Keep it cute, Use emojis.`
              }
            ],
            "model": "llama3-70b-8192",
            "temperature": 1,
            "max_tokens": 1024,
            "top_p": 1,
            "stream": false,
            "stop": null
          })
        });

        const chatCompletion = await response.json();
        console.log('API Response:', chatCompletion);

        if (chatCompletion.choices && chatCompletion.choices.length > 0) {
          let reminder = chatCompletion.choices[0].message.content;
          console.log('Generated reminder:', reminder);

          chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Custom Reminder',
            message: reminder,
            priority: 2
          });
        } else {
          console.error('Unexpected API response structure:', chatCompletion);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  }
});