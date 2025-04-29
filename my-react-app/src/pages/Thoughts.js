import React, { useState } from 'react';

const journalEntries = {
    '2025-04-26': `Today was such a lovely day at the office and on a Friday too! I usually don’t come in on Fridays since the week already feels like it’s winding down, lol. But I’m really glad I showed up today.
  
  One of my work friends came by my desk and gave me some precious Chebbakia. I call it precious because her aunt made it in Morocco, and her cousin brought it all the way here! It tasted amazing with my peppermint tea.
  
  And something else really special happened, I made a new friend in the washroom. We’re both hijabis, and this is actually the second time I’ve connected with someone like this! We ended up exchanging contact info and had a sweet moment of sisterhood. It’s been just over a year since I started wearing the hijab, and moments like these fill my heart with so much joy and remind me why I’m proud to wear it. Anyways, Happy Friday XD`,
};

function Thoughts() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div style={{ marginLeft: '180px', padding: '2rem' }}>
            <h2 style={{ marginTop: '2rem' }}>Thoughts</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {Object.keys(journalEntries).map((date) => (
                    <li key={date}>
                        <button
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'blue',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                marginBottom: '1rem'
                            }}
                            onClick={() => setSelectedDate(date)}
                        >
                            {new Date(date).toDateString()}
                        </button>
                    </li>
                ))}
            </ul>

            {selectedDate && (
                <div style={{ marginTop: '2rem' }}>
                    <h3>{new Date(selectedDate).toDateString()}</h3>
                    {journalEntries[selectedDate]
                        .split('\n')
                        .map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                </div>
            )}


        </div>
    );
}

export default Thoughts;
