import React from 'react';
import { ChevronRight, Users } from 'lucide-react';

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
        subtitle: 'In partnership with Global Turks AI.',
        link: 'https://luma.com/n562pzk7',
        attendees: 350,
        highlight: true,
      },
      {
        date: 'Nov 15',
        title: 'Turks in AI Forum — After Party',
        link: 'https://partiful.com/e/ffORAQk0exKuaRW7ToVb?c=rCwnU25L',
        attendees: 64,
      },
      {
        date: 'Nov 19',
        title: 'A Conversation with Turkish Ambassador Sedat Onal',
        attendees: 10,
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
      },
      {
        date: 'Mar 4',
        title: 'Panel with TUSIAD',
        upcoming: true,
      },
      {
        date: 'Mar 5',
        title: 'Panel with E2VC',
        upcoming: true,
      },
    ],
  },
  {
    quarter: 'Spring 2026',
    items: [
      {
        date: 'Apr 9',
        title: 'Harvard AI Forum',
        subtitle: 'We recommend our members to attend this event organized by our friends at Harvard.',
        link: 'https://www.linkedin.com/posts/activity-7407806194070732800-Mpn-/?utm_source=share&utm_medium=member_ios&rcm=ACoAAAZgv4IBh3yzaWfFg-DdwfOdoZJGhjpe7Zg',
        recommended: true,
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
      className={`group flex items-baseline gap-4 py-3 px-4 -mx-4 rounded-lg transition-colors ${
        event.highlight
          ? 'ring-1 ring-turkish-red/20 bg-turkish-light/40 mx-0 px-4'
          : 'hover:bg-gray-50'
      } ${event.upcoming ? 'opacity-50' : ''}`}
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

      {event.attendees && (
        <span className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
          <Users className="w-3 h-3" />
          {event.attendeesLabel || event.attendees}
        </span>
      )}

      {event.link && (
        <span className="flex items-center gap-0.5 text-turkish-red text-sm font-medium flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
          LINK
          <ChevronRight className="w-3 h-3" />
        </span>
      )}
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
      </header>

      {/* Events */}
      <main className="max-w-2xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-bold text-gray-900 mb-8">Events</h2>
        {events.map((section, index) => (
          <QuarterSection
            key={index}
            quarter={section.quarter}
            items={section.items}
          />
        ))}
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
