import React, { useState } from 'react';

const ScriptureStudy = () => {
  const [activeVerse, setActiveVerse] = useState(1);
  const [activeTab, setActiveTab] = useState('verse');

  const scriptureData = [
    {
      id: 1,
      verse: "After these things the Lord appointed other seventy also, and sent them two and two before his face into every city and place, whither he himself would come.",
      explanation: "Jesus appointed seventy disciples and sent them out in pairs to prepare the way for His ministry. This emphasizes teamwork, preparation, and the importance of personal outreach before Christ's arrival.",
      caseStudy: "A church wanted to evangelize in a new neighborhood. Instead of sending individuals alone, they organized teams of two to build relationships and share the Gospel. The results were much more effective because they could support and encourage each other.",
      relatedVerses: [
        "Matthew 28:19-20 – The Great Commission",
        "Ecclesiastes 4:9-10 – Two are better than one",
        "Mark 6:7 – Jesus sending the twelve disciples in pairs"
      ]
    },
    {
      id: 2,
      verse: "Therefore said he unto them, The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest.",
      explanation: "Jesus acknowledged the vast need for evangelism and discipleship. He encouraged His followers to pray for more workers to spread God's message.",
      caseStudy: "A small church noticed that their outreach team was overwhelmed. They began praying regularly for more volunteers, and over time, many new believers stepped up to help in evangelism.",
      relatedVerses: [
        "Matthew 9:37-38 – The harvest is plentiful",
        "John 4:35 – Look at the fields, they are ripe for harvest",
        "Acts 1:8 – Being witnesses to the ends of the earth"
      ]
    },
    {
      id: 3,
      verse: "Go your ways: behold, I send you forth as lambs among wolves.",
      explanation: "Jesus warned His disciples that their mission would be dangerous. They would face opposition, just as lambs are vulnerable to wolves.",
      caseStudy: "A missionary in a hostile country faced severe persecution but continued sharing the Gospel despite threats. Their faithfulness led to a small but strong underground church.",
      relatedVerses: [
        "Matthew 10:16 – Be wise as serpents, harmless as doves",
        "2 Timothy 3:12 – All who live godly in Christ will suffer persecution",
        "John 15:18-19 – The world hates those who follow Christ"
      ]
    },
    {
      id: 4,
      verse: "Carry neither purse, nor scrip, nor shoes: and salute no man by the way.",
      explanation: "Jesus told them to travel light, relying on God's provision and focusing solely on their mission.",
      caseStudy: "A modern-day evangelist felt called to serve in an impoverished area without financial backing. Relying solely on faith, they witnessed miraculous provision for their needs.",
      relatedVerses: [
        "Matthew 6:25-26 – Do not worry about your life",
        "Philippians 4:19 – God will supply all your needs",
        "Hebrews 13:5 – Be content with what you have"
      ]
    },
    {
      id: 5,
      verse: "And into whatsoever house ye enter, first say, Peace be to this house.",
      explanation: "Jesus instructed His disciples to offer peace, ensuring their mission was grounded in kindness and goodwill.",
      caseStudy: "A family moved into a neighborhood with tensions between different groups. They made it a practice to bless each home they visited, fostering peace and unity.",
      relatedVerses: [
        "Matthew 5:9 – Blessed are the peacemakers",
        "Romans 12:18 – Live peaceably with all",
        "John 14:27 – Jesus gives His peace"
      ]
    },
    {
      id: 6,
      verse: "And if the son of peace be there, your peace shall rest upon it: if not, it shall turn to you again.",
      explanation: "If the household was receptive, peace would remain; if not, the disciples were not to be discouraged.",
      caseStudy: "A missionary family offered hospitality and prayer in a new town. Some people welcomed them warmly, while others rejected them. They focused on those who were receptive.",
      relatedVerses: [
        "Matthew 10:13 – If the household is worthy, let peace rest on it",
        "Acts 16:15 – Lydia's household receives the Gospel",
        "John 20:21 – Jesus' peace given to the disciples"
      ]
    },
    {
      id: 7,
      verse: "And in the same house remain, eating and drinking such things as they give: for the labourer is worthy of his hire. Go not from house to house.",
      explanation: "The disciples were to stay with those who received them and accept hospitality as part of God's provision.",
      caseStudy: "A traveling preacher once tried to avoid staying in one place too long, but after reading this verse, he committed to deeper relationships by staying in one place longer, strengthening the community.",
      relatedVerses: [
        "1 Timothy 5:18 – The laborer is worthy of his wages",
        "Philippians 4:12 – Learning to be content in all situations",
        "Hebrews 13:2 – Show hospitality to strangers"
      ]
    },
    {
      id: 8,
      verse: "And into whatsoever city ye enter, and they receive you, eat such things as are set before you.",
      explanation: "The disciples were to accept local hospitality graciously, even if it was different from their usual customs.",
      caseStudy: "A missionary visiting a foreign country struggled with the local food but realized that embracing it helped build trust and relationships with the community.",
      relatedVerses: [
        "1 Corinthians 10:27 – Eat what is set before you",
        "Romans 14:3 – Do not judge what others eat",
        "Acts 10:15 – God has made all things clean"
      ]
    },
    {
      id: 9,
      verse: "And heal the sick that are therein, and say unto them, The kingdom of God is come nigh unto you.",
      explanation: "The disciples were to demonstrate God's power through healing and proclaim the coming of God's kingdom.",
      caseStudy: "A doctor who was also a believer prayed for his patients as he treated them. Many experienced healing, and it opened doors for conversations about faith.",
      relatedVerses: [
        "Mark 16:18 – Lay hands on the sick, and they will recover",
        "James 5:14-15 – Anoint the sick with oil and pray",
        "Matthew 4:23 – Jesus healed every disease and affliction"
      ]
    },
    {
      id: 10,
      verse: "But into whatsoever city ye enter, and they receive you not, go your ways out into the streets of the same, and say,",
      explanation: "If a city rejected them, they were to move on without resentment but still leave a final warning.",
      caseStudy: "A street preacher faced rejection in a city but instead of forcing the message, he left respectfully. Later, people from that city sought him out because they remembered his kindness.",
      relatedVerses: [
        "Matthew 10:14 – Shake the dust off your feet",
        "Acts 13:51 – Paul and Barnabas shake off dust in protest",
        "Luke 9:5 – If not received, move on"
      ]
    }
  ];

  const themes = {
    teamwork: [1, 2],
    persecution: [3],
    faith: [4, 7, 8],
    peace: [5, 6],
    healing: [9],
    rejection: [10]
  };

  const themeColors = {
    teamwork: "#5E97F6",
    persecution: "#DB4437",
    faith: "#F4B400",
    peace: "#0F9D58",
    healing: "#AB47BC",
    rejection: "#00ACC1"
  };

  const getVerseThemes = (verseId) => {
    return Object.entries(themes)
      .filter(([_, verses]) => verses.includes(verseId))
      .map(([theme, _]) => theme);
  };

  const renderIconForVerse = (verseId) => {
    const icons = {
      1: "👥", // Pairs of people
      2: "🌾", // Harvest
      3: "🐺", // Wolf
      4: "👜", // Purse/bag
      5: "☮️", // Peace
      6: "🏠", // House
      7: "🍽️", // Food
      8: "🍞", // Bread
      9: "🩹", // Healing
      10: "🚶", // Walking away
    };
    
    return icons[verseId] || "📖";
  };

  return (
    <div className="flex flex-col p-4 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Luke 10:1-10 (KJV)</h1>
        <p className="text-gray-600 text-lg">Interactive Scripture Study</p>
      </div>

      {/* Visual Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {scriptureData.map((data) => {
          const verseThemes = getVerseThemes(data.id);
          const primaryTheme = verseThemes.length > 0 ? verseThemes[0] : "default";
          const color = themeColors[primaryTheme] || "#718096";
          
          return (
            <button
              key={data.id}
              onClick={() => setActiveVerse(data.id)}
              className={`relative flex flex-col items-center justify-center w-20 h-20 rounded-xl transition-transform hover:scale-105 shadow-md ${
                activeVerse === data.id ? "ring-4 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color }}
            >
              <span className="text-2xl mb-1">{renderIconForVerse(data.id)}</span>
              <span className="text-white font-bold">v. {data.id}</span>
              {verseThemes.length > 0 && (
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow">
                  {verseThemes.length}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Theme Legend */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(themeColors).map(([theme, color]) => (
          <div 
            key={theme} 
            className="flex items-center px-3 py-1 rounded-full text-white text-sm"
            style={{ backgroundColor: color }}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </div>
        ))}
      </div>

      {/* Content Display */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Verse {activeVerse}</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('verse')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'verse' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Verse
            </button>
            <button 
              onClick={() => setActiveTab('explanation')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'explanation' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Explanation
            </button>
            <button 
              onClick={() => setActiveTab('caseStudy')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'caseStudy' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Case Study
            </button>
            <button 
              onClick={() => setActiveTab('relatedVerses')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'relatedVerses' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Related Verses
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          {activeTab === 'verse' && (
            <div className="text-center">
              <div className="text-4xl mb-4">{renderIconForVerse(activeVerse)}</div>
              <p className="text-xl font-serif italic text-gray-800">{scriptureData[activeVerse - 1].verse}</p>
            </div>
          )}
          
          {activeTab === 'explanation' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Explanation</h3>
              <p className="text-gray-700">{scriptureData[activeVerse - 1].explanation}</p>
            </div>
          )}
          
          {activeTab === 'caseStudy' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Case Study</h3>
              <div className="bg-white border-l-4 border-blue-500 p-4 rounded shadow">
                <p className="text-gray-700">{scriptureData[activeVerse - 1].caseStudy}</p>
              </div>
            </div>
          )}
          
          {activeTab === 'relatedVerses' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Verses</h3>
              <ul className="space-y-2">
                {scriptureData[activeVerse - 1].relatedVerses.map((verse, index) => (
                  <li key={index} className="bg-white p-3 rounded shadow">
                    {verse}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Journey Visualization */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Disciples' Journey</h2>
        <div className="relative h-64">
          <div className="absolute w-full h-2 bg-gray-200 top-1/2 transform -translate-y-1/2">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((step) => (
                <div 
                  key={step} 
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    step <= activeVerse ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                  } cursor-pointer`}
                  onClick={() => setActiveVerse(step)}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-full mt-4 w-full flex justify-between text-sm text-center text-gray-600">
            <div className="w-12">Sending</div>
            <div className="w-12">Prayer</div>
            <div className="w-12">Warning</div>
            <div className="w-12">Faith</div>
            <div className="w-12">Peace</div>
            <div className="w-12">Reception</div>
            <div className="w-12">Hospitality</div>
            <div className="w-12">Acceptance</div>
            <div className="w-12">Healing</div>
            <div className="w-12">Rejection</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptureStudy;