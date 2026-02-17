import React, { useState } from 'react';
import { ChevronRight, Users, Linkedin } from 'lucide-react';

const board = [
  { role: 'President', name: 'Batu El', linkedin: 'https://www.linkedin.com/in/batu-el/' },
  { role: 'Vice President', name: 'Onat Dalmaz', linkedin: 'https://www.linkedin.com/in/onat-dalmaz-0921a0168/' },
  { role: 'Finance Officer', name: 'Orhun Akengin', linkedin: 'https://www.linkedin.com/in/orhun-akengin/' },
  { role: 'IT Officer', name: 'Kuzey Kantarcioglu', linkedin: 'https://www.linkedin.com/in/kuzey-kantarcioglu/' },
];

const organizingTeam = [
  { name: 'Alp Tartici', linkedin: 'https://www.linkedin.com/in/alp-tartici/' },
  { name: 'Gulbin Atli', linkedin: 'https://www.linkedin.com/in/gulbin-atli/' },
  { name: 'Melis Ata', linkedin: 'https://www.linkedin.com/in/melis-ata/' },
  { name: 'Mert Karabiyik', linkedin: 'https://www.linkedin.com/in/mert-karabiyik/' },
  { name: 'Lara Selin Seyahi', linkedin: 'https://www.linkedin.com/in/lara-selin-seyahi/' },
  { name: 'Alperen Konukbak', linkedin: 'https://www.linkedin.com/in/alperen-konukbak/' },
  { name: 'Beyza Kaya', linkedin: 'https://www.linkedin.com/in/beyza-kaya/' },
  { name: 'Mehmet Cem Yedekci', linkedin: 'https://www.linkedin.com/in/mehmet-cem-yedekci/' },
  { name: 'Mehmet Hamza Erol', linkedin: 'https://www.linkedin.com/in/mehmet-hamza-erol/' },
  { name: 'Mete Erdogan', linkedin: 'https://www.linkedin.com/in/mete-erdogan/' },
];

const events = [
  {
    quarter: 'Autumn 2025',
    items: [
      {
        date: 'Aug 30',
        title: 'TSA End of Summer Party',
        link: 'https://partiful.com/e/KHDxHjyCuY3hNLankaiK?c=4Mr4Sh7V',
        attendees: 38,
      },
      {
        date: 'Oct 4',
        title: 'Welcome to the Farm Mangal',
        link: 'https://partiful.com/e/hkLIruQfTFinFqxse0aD?c=UqYuRS64',
        attendees: 68,
      },
      {
        date: 'Nov 1',
        title: '29 Ekim Cumhuriyet Yemegi',
        link: 'https://partiful.com/e/Y8G12WP5C6lOUUS3CAMv?c=mWTSEdRO',
        attendees: 55,
      },
      {
        date: 'Nov 15',
        title: 'Turks in AI Forum @ Stanford',
        subtitle: (<>In collaboration with <a href="https://globalturksai.org/" target="_blank" rel="noopener noreferrer" className="underline text-gray-400 hover:text-gray-500" onClick={(e) => e.stopPropagation()}>Global Turks AI</a>.</>),
        link: 'https://luma.com/n562pzk7',
        attendees: 320,
        highlight: true,
      },
      {
        date: 'Nov 15',
        title: 'Turks in AI Forum After Party',
        link: 'https://partiful.com/e/ffORAQk0exKuaRW7ToVb?c=rCwnU25L',
        attendees: 64,
      },
      {
        date: 'Nov 19',
        title: 'A Conversation with Turkish Ambassador Sedat Onal',
        link: 'https://en.wikipedia.org/wiki/Sedat_%C3%96nal',
      },
      {
        date: 'Dec 3',
        title: 'Turks @ NeurIPS Meetup',
        subtitle: 'Dinner meetup for Turkish researchers attending NeurIPS in San Diego.',
        link: 'https://partiful.com/e/F1Z0CxagpNmDCivxw0eG?c=3_PYXPiZ',
        attendees: 10,
      },
    ],
  },
  {
    quarter: 'Winter 2026',
    items: [
      {
        date: 'Jan 28',
        title: 'A Conversation with Hasan Mandal, ITU President & Former TUBITAK President',
        link: 'https://partiful.com/e/h9qhLLLh5EtnDauSf3V5?c=DGIsfoPp',
        attendees: 25,
      },
      {
        date: 'Jan 31',
        title: 'Euro Party',
        subtitle: 'In partnership with the Italian, Catalan, German, Scandinavian, and Greek student associations.',
        link: 'https://partiful.com/e/sAMvjM7rluqCWg7tyzmf?c=J0Y1g89m',
        attendees: 600,
      },
      {
        date: 'Feb 26',
        title: 'Fireside Chat with Sinan Yaman, Founder of YGA',
        link: 'https://partiful.com/e/gIir2tiY4lJ72bQyhmy6?c=5BFOauaw',
        upcoming: true,
      },
      {
        date: 'Mar 4',
        title: 'A Conversation with TUSIAD',
        link: 'https://partiful.com/e/amhEpKKh9Jza0XVYDns3?c=trelhgx7',
        upcoming: true,
      },
      {
        date: 'Mar 6',
        title: (<>Fireside Chat with <a href="https://www.vcleaders.com/vc-central-speakers/arin-ozkula" target="_blank" rel="noopener noreferrer" className="underline" style={{color: 'inherit'}} onClick={(e) => e.stopPropagation()}>Arin Ozkula</a>, General Partner at E2VC</>),
        link: 'https://partiful.com/e/FXPodRkmbLMaFeVhUAye?c=OjeNKo_a',
        upcoming: true,
      },
    ],
  },
  {
    quarter: 'Spring 2026',
    items: [
      {
        date: 'Apr 5',
        title: 'Turkish YC Founders at Stanford',
        link: 'https://luma.com/jnf73xuc',
        upcoming: true,
      },
      {
        date: 'TBA',
        title: 'Spring Mangal',
        upcoming: true,
      },
      {
        date: 'Jun 1',
        title: 'TSA Elections for 2026–2027 Board',
        upcoming: true,
      },
    ],
  },
];

const EventRow = ({ event }) => {
  const content = (
    <div
      className={`group flex items-baseline gap-4 py-3 px-4 -mx-4 rounded-lg transition-colors hover:bg-gray-50 ${
        event.upcoming ? 'opacity-50' : ''
      }`}
    >
      <span className="text-sm text-gray-400 w-14 flex-shrink-0 font-mono">
        {event.date}
      </span>

      <span className="flex-1 text-gray-900 text-[15px]">
        {event.title}
        {event.upcoming && (
          <span className="ml-2 text-xs text-gray-400">(TBA)</span>
        )}
        {event.subtitle && (
          <span className="block text-xs text-gray-400 mt-0.5">{event.subtitle}</span>
        )}
      </span>

      <span className="w-12 flex-shrink-0 flex items-center justify-end gap-1 text-xs text-gray-400">
        {event.attendees && (
          <>
            <Users className="w-3 h-3" />
            {event.attendeesLabel || event.attendees}
          </>
        )}
      </span>

      <span className="w-12 flex-shrink-0 text-right">
        {event.link && (
          <span className="inline-flex items-center gap-0.5 text-turkish-red text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
            LINK
            <ChevronRight className="w-3 h-3" />
          </span>
        )}
      </span>

      <span className="w-16 flex-shrink-0 text-right">
        {!event.upcoming && (
          <a
            href={`mailto:batuel@stanford.edu?subject=Feedback: ${encodeURIComponent(event.title)}`}
            className="inline-flex items-center gap-0.5 text-gray-400 text-xs hover:text-gray-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            FEEDBACK
          </a>
        )}
      </span>
    </div>
  );

  if (event.link) {
    return (
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        {content}
      </a>
    );
  }

  return content;
};

const QuarterSection = ({ quarter, items }) => (
  <div className="mb-10">
    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2 pl-0">
      {quarter}
    </h2>
    <div className="border-t border-gray-100">
      {items.map((event, index) => (
        <EventRow key={index} event={event} />
      ))}
    </div>
  </div>
);

const App = () => {
  const [tab, setTab] = useState('events');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="max-w-2xl mx-auto px-6 pt-20 pb-16 text-center">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Stanford Turkish Student Association"
          className="w-28 h-28 mx-auto mb-6 rounded-full"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Stanford Turkish
          <br />
          Student Association
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-8">
          {['events', 'team'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-sm font-medium uppercase tracking-widest pb-1 transition-colors ${
                tab === t
                  ? 'text-gray-900 border-b-2 border-turkish-red'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pb-20">
        {tab === 'events' && (
          <>
            {events.map((section, index) => (
              <QuarterSection
                key={index}
                quarter={section.quarter}
                items={section.items}
              />
            ))}
          </>
        )}

        {tab === 'team' && (
          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
              2025–2026 Board
            </h2>
            <div className="border-t border-gray-100 mb-10">
              {board.map((member, index) => (
                <div key={index} className="flex items-baseline gap-4 py-3">
                  <span className="text-sm text-gray-400 w-36 flex-shrink-0">
                    {member.role}
                  </span>
                  <span className="flex-1 text-gray-900 text-[15px]">
                    {member.name}
                  </span>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
              Organizing Team
            </h2>
            <div className="border-t border-gray-100 pt-3">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {organizingTeam.map((member, index) => (
                  <a
                    key={index}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-900 text-[15px] hover:text-gray-600 transition-colors"
                  >
                    {member.name}
                    <Linkedin className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-gray-300">
            Stanford Turkish Student Association &middot; Est. 1979
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
