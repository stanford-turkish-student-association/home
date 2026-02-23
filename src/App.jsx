import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Users, Linkedin } from 'lucide-react';

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
        tag: 'social',
      },
      {
        date: 'Oct 4',
        title: 'Welcome to the Farm Mangal',
        link: 'https://partiful.com/e/hkLIruQfTFinFqxse0aD?c=UqYuRS64',
        attendees: 68,
        tag: 'social',
      },
      {
        date: 'Nov 1',
        title: 'Republic Day Dinner',
        link: 'https://partiful.com/e/Y8G12WP5C6lOUUS3CAMv?c=mWTSEdRO',
        attendees: 55,
        tag: 'cultural',
      },
      {
        date: 'Nov 15',
        title: 'Turks in AI Forum @ Stanford',
        subtitle: (<>In collaboration with <a href="https://globalturksai.org/" target="_blank" rel="noopener noreferrer" className="underline text-gray-400 hover:text-gray-500" onClick={(e) => e.stopPropagation()}>Global Turks AI</a>. <a href="https://stanford-turkish-student-association.github.io/turks-in-ai-forum/" target="_blank" rel="noopener noreferrer" className="underline text-gray-400 hover:text-gray-500" onClick={(e) => e.stopPropagation()}>Website</a>.</>),
        link: 'https://luma.com/n562pzk7',
        attendees: 320,
        highlight: true,
        tag: 'career',
        program: [
          { time: '9:30 – 10:30 am', title: 'Welcome Brunch', detail: 'Networking & Bites' },
          { time: '10:30 – 11:00 am', title: 'Opening Remarks', detail: 'Stanford Turkish Student Association, Global Turks AI & Supporters' },
          { time: '11:00 – 11:40 am', title: 'AI Innovation with Researchers', detail: 'Ilge Akkaya (OpenAI), Sercan Arik (Google), Beliz Gunel (DeepMind)' },
          { time: '11:40 – 12:20 pm', title: 'Enterprise AI Adoption with Executives', detail: 'Serdar Kadioglu (Fidelity), Ali Dasdan (Dropbox), Alper Tekin (You.com)' },
          { time: '12:20 – 12:50 pm', title: 'Break', detail: 'Coffee & Tea' },
          { time: '12:50 – 1:20 pm', title: 'AI Trends in the Enterprise World', detail: 'Burak Gokturk (Google)' },
          { time: '1:20 – 2:00 pm', title: 'AI Investment with VC Partners', detail: 'Eylul Kayin (Gradient), Murat Bicer (CRV), Cagla Kaymaz (Category)' },
          { time: '2:00 – 3:00 pm', title: 'Lunch Break', detail: 'Networking & Bites' },
          { time: '3:00 – 3:40 pm', title: 'AI Entrepreneurship with Founders – 1', detail: 'Asude Altintas (Twin Robotics), Yusuf Ozuysal (Gr33n), Gulin Yilmaz (Rosette), Ike Kilinc (Traversal)' },
          { time: '3:40 – 4:30 pm', title: 'AI Entrepreneurship with Founders – 2', detail: 'Atila Orhon (Argmax), Tunga Bayrak (Freya), Tugce Bulut (Eloquient), Sezer Ovunc (Snapshot)' },
          { time: '4:30 – 6:00 pm', title: 'Recap & Celebration', detail: 'Networking & Bites' },
        ],
      },
      {
        date: 'Nov 15',
        title: 'Turks in AI Forum After Party',
        link: 'https://partiful.com/e/ffORAQk0exKuaRW7ToVb?c=rCwnU25L',
        attendees: 64,
        tag: 'social',
      },
      {
        date: 'Nov 19',
        title: 'A Conversation with Turkish Ambassador Sedat Onal',
        link: 'https://en.wikipedia.org/wiki/Sedat_%C3%96nal',
        linkLabel: 'LINK',
        tag: 'cultural',
      },
      {
        date: 'Dec 3',
        title: 'Turks @ NeurIPS Meetup',
        subtitle: 'Dinner meetup for Turkish researchers attending NeurIPS in San Diego.',
        link: 'https://partiful.com/e/F1Z0CxagpNmDCivxw0eG?c=3_PYXPiZ',
        attendees: 10,
        tag: 'career',
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
        tag: 'career',
      },
      {
        date: 'Jan 31',
        title: 'Euro Party',
        subtitle: 'In partnership with the Italian, Catalan, German, Scandinavian, and Greek student associations.',
        link: 'https://partiful.com/e/sAMvjM7rluqCWg7tyzmf?c=J0Y1g89m',
        attendees: 600,
        tag: 'social',
      },
      {
        date: 'Feb 26',
        title: (<>Fireside Chat with <a href="https://www.sinanyaman.org/" target="_blank" rel="noopener noreferrer" className="underline" style={{color: 'inherit'}} onClick={(e) => e.stopPropagation()}>Sinan Yaman</a>, Founder of YGA</>),
        link: 'https://partiful.com/e/gIir2tiY4lJ72bQyhmy6?c=5BFOauaw',
        tag: 'career',
      },
      {
        date: 'Mar 4',
        title: (<>A Conversation with <a href="https://tusiad.org/en/silicon-valley-wg" target="_blank" rel="noopener noreferrer" className="underline" style={{color: 'inherit'}} onClick={(e) => e.stopPropagation()}>TUSIAD Silicon Valley Network</a></>),
        link: 'https://partiful.com/e/amhEpKKh9Jza0XVYDns3?c=trelhgx7',
        tag: 'career',
        description: 'Opening Remarks: Ayşegül İldeniz, Chair of the TÜSİAD Silicon Valley Network.\n\nSpeakers:\nAylin Uysal, VP of Design, Oracle Cloud Applications\nMustafa Sakalsız, Founder & CEO, Peaka\nTimur Cüceloğlu Yarnall, AI Partners Director, Snowflake and Stanford Alum\nTutti Taygerly, Executive Coach, Author, Speaker, and Stanford Alum',
      },
      {
        date: 'Mar 6',
        title: 'Fireside Chat with E2VC',
        link: 'https://partiful.com/e/FXPodRkmbLMaFeVhUAye?c=OjeNKo_a',
        tag: 'career',
        description: 'Speakers:\nArın Özkula, General Partner at E2VC\nKaan Eren, Partner at E2VC\nTunya Irkad, Principal at E2VC',
      },
      {
        date: 'Mar 14',
        title: 'TSA Iftar',
        link: 'https://partiful.com/e/W6mD43xJlXqqmE9jznzP',
        tag: 'cultural',
      },
    ],
  },
  {
    quarter: 'Spring 2026',
    items: [
      {
        date: 'Jun 1',
        title: 'TSA Elections for 2026–2027 Board',
        upcoming: true,
      },
    ],
  },
];

const tagColors = {
  career: 'bg-blue-50 text-blue-500',
  cultural: 'bg-amber-50 text-amber-600',
  social: 'bg-green-50 text-green-500',
};

const EventRow = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  const row = (
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
        {event.tag && (
          <span className={`ml-2 text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded ${tagColors[event.tag]}`}>
            {event.tag}
          </span>
        )}
        {event.program && (
          <button
            className="ml-2 text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(!expanded); }}
          >
            {expanded ? 'Hide Program' : 'Program'}
            <ChevronDown className={`inline w-3 h-3 ml-0.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        )}
        {event.description && (
          <button
            className="ml-2 text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(!expanded); }}
          >
            {expanded ? 'Hide Details' : 'Details'}
            <ChevronDown className={`inline w-3 h-3 ml-0.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        )}
        {event.upcoming && !event.tag && (
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
            {event.linkLabel || 'RSVP'}
            <ChevronRight className="w-3 h-3" />
          </span>
        )}
      </span>

      <span className="w-16 flex-shrink-0 text-right">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeWamPjMoe7kQ0Amr0exQFJ1232cdAHrlbbBPh0xGdqtTRy3Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-gray-400 text-xs hover:text-gray-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          FEEDBACK
        </a>
      </span>
    </div>
  );

  const programSection = expanded && event.program && (
    <div className="ml-[4.5rem] mb-4 border-l-2 border-gray-100 pl-4">
      {event.program.map((item, i) => (
        <div key={i} className="py-1.5">
          <span className="text-xs font-mono text-gray-400">{item.time}</span>
          <div className="text-sm font-medium text-gray-800">{item.title}</div>
          <div className="text-xs text-gray-400">{item.detail}</div>
        </div>
      ))}
    </div>
  );

  const descriptionSection = expanded && event.description && (
    <div className="ml-[4.5rem] mb-4 border-l-2 border-gray-100 pl-4">
      {event.description.split('\n\n').map((paragraph, i) => (
        <p key={i} className="text-sm text-gray-500 mb-2 last:mb-0">
          {paragraph.split('\n').map((line, j, arr) => (
            <React.Fragment key={j}>{line}{j < arr.length - 1 && <br />}</React.Fragment>
          ))}
        </p>
      ))}
    </div>
  );

  if (event.link) {
    return (
      <div>
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {row}
        </a>
        {programSection}
        {descriptionSection}
      </div>
    );
  }

  return <div>{row}{programSection}{descriptionSection}</div>;
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
