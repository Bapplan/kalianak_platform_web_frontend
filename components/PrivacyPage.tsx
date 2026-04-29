
import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="font-sans text-white overflow-x-hidden bg-charcoal min-h-screen">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-charcoal/90 backdrop-blur-md py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="font-serif text-xl font-bold tracking-widest uppercase text-white hover:text-ember-500 transition-colors">
            Ikan Bakar Kalianak
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <Shield className="w-12 h-12 text-ember-500 mx-auto mb-6" />
          <span className="uppercase tracking-[0.2em] text-xs text-ember-500 font-bold block mb-3">Legal</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Privacy Policy
          </h1>
          <div className="h-px w-20 bg-ember-600 mx-auto mt-6"></div>
          <p className="text-gray-500 text-sm mt-4 uppercase tracking-widest">Last updated: April 17, 2026</p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Overview</h2>
            <p>
              Kalianak POS is a point-of-sale application developed for internal business use
              by Ikan Bakar Kalianak, Surabaya, Indonesia.
            </p>
          </section>

          <div className="h-px bg-white/5"></div>

          <section>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Data We Collect</h2>
            <p className="mb-3">This app collects and processes the following data:</p>
            <ul className="space-y-2 pl-4">
              {[
                'Order and transaction data (for business operations)',
                'Device information (for app functionality)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ember-500 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px bg-white/5"></div>

          <section>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Data We Do NOT Collect</h2>
            <ul className="space-y-2 pl-4">
              {[
                'Personal data from end customers',
                'Location data',
                'Contacts or media files',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ember-500 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px bg-white/5"></div>

          <section>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Data Storage</h2>
            <p>
              All transaction data is stored on our own servers located in Indonesia
              and is not shared with third parties.
            </p>
          </section>

          <div className="h-px bg-white/5"></div>

          <section>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Children</h2>
            <p>This app is not directed at children under 13 years of age.</p>
          </section>

          <div className="h-px bg-white/5"></div>

          <section>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Contact</h2>
            <p>
              For questions regarding this privacy policy, contact:{' '}
              <a
                href="mailto:minmail421@gmail.com"
                className="text-ember-500 hover:text-ember-200 transition-colors border-b border-ember-500/30 hover:border-ember-200"
              >
                minmail421@gmail.com
              </a>
            </p>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block text-sm uppercase tracking-widest text-gray-500 hover:text-ember-500 transition-colors border-b border-white/10 hover:border-ember-500 pb-1"
          >
            ← Back to Ikan Bakar Kalianak
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="font-serif text-lg font-bold tracking-[0.2em] uppercase text-white mb-1">
          Ikan Bakar Kalianak
        </p>
        <p className="text-[10px] text-gray-700 uppercase tracking-widest">
          © {new Date().getFullYear()} Ikan Bakar Kalianak. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default PrivacyPage;
