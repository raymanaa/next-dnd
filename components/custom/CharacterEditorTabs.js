import React, { useState } from 'react';

const categories = {
  race: [
    { name: 'Human', imageUrl: 'https://example.com/human.png' },
    { name: 'Elf', imageUrl: 'https://example.com/elf.png' },
    { name: 'Dwarf', imageUrl: '' }, // Placeholder URL for Dwarf image
    { name: 'Halfling', imageUrl: '' }, // Placeholder URL for Halfling image
    { name: 'Dragonborn', imageUrl: '' }, // Placeholder URL for Dragonborn image
    { name: 'Gnome', imageUrl: '' }, // Placeholder URL for Gnome image
    { name: 'Half-Elf', imageUrl: '' }, // Placeholder URL for Half-Elf image
    { name: 'Half-Orc', imageUrl: '' }, // Placeholder URL for Half-Orc image
    { name: 'Tiefling', imageUrl: '' } // Placeholder URL for Tiefling image
  ],
  class: [
    { name: 'Warrior', imageUrl: 'https://example.com/warrior.png' },
    { name: 'Mage', imageUrl: 'https://example.com/mage.png' },
    { name: 'Barbarian', imageUrl: '' }, // Placeholder URL for Barbarian image
    { name: 'Bard', imageUrl: '' }, // Placeholder URL for Bard image
    { name: 'Cleric', imageUrl: '' }, // Placeholder URL for Cleric image
    { name: 'Druid', imageUrl: '' }, // Placeholder URL for Druid image
    { name: 'Fighter', imageUrl: '' }, // Placeholder URL for Fighter image
    { name: 'Monk', imageUrl: '' }, // Placeholder URL for Monk image
    { name: 'Paladin', imageUrl: '' }, // Placeholder URL for Paladin image
    { name: 'Ranger', imageUrl: '' }, // Placeholder URL for Ranger image
    { name: 'Rogue', imageUrl: '' }, // Placeholder URL for Rogue image
    { name: 'Sorcerer', imageUrl: '' }, // Placeholder URL for Sorcerer image
    { name: 'Warlock', imageUrl: '' }, // Placeholder URL for Warlock image
    { name: 'Wizard', imageUrl: '' } // Placeholder URL for Wizard image
  ],
  artStyle: [
    { name: 'Realistic', imageUrl: '' }, // Placeholder URL for Realistic image
    { name: 'Cartoon', imageUrl: '' }, // Placeholder URL for Cartoon image
    { name: 'Anime', imageUrl: '' }, // Placeholder URL for Anime image
    { name: 'Watercolor', imageUrl: '' }, // Placeholder URL for Watercolor image
    { name: 'Oil Painting', imageUrl: '' } // Placeholder URL for Oil Painting image
  ],
  hairColor: [
    { name: 'Black', imageUrl: '' }, // Placeholder URL for Black hair image
    { name: 'Brown', imageUrl: '' }, // Placeholder URL for Brown hair image
    { name: 'Blonde', imageUrl: '' }, // Placeholder URL for Blonde hair image
    { name: 'Red', imageUrl: '' }, // Placeholder URL for Red hair image
    { name: 'White', imageUrl: '' }, // Placeholder URL for White hair image
    { name: 'Grey', imageUrl: '' }, // Placeholder URL for Grey hair image
    { name: 'Blue', imageUrl: '' }, // Placeholder URL for Blue hair image
    { name: 'Green', imageUrl: '' } // Placeholder URL for Green hair image
  ],
  eyeColor: [
    { name: 'Brown', imageUrl: '' }, // Placeholder URL for Brown eyes image
    { name: 'Blue', imageUrl: '' }, // Placeholder URL for Blue eyes image
    { name: 'Green', imageUrl: '' }, // Placeholder URL for Green eyes image
    { name: 'Grey', imageUrl: '' }, // Placeholder URL for Grey eyes image
    { name: 'Hazel', imageUrl: '' }, // Placeholder URL for Hazel eyes image
    { name: 'Red', imageUrl: '' }, // Placeholder URL for Red eyes image
    { name: 'Violet', imageUrl: '' } // Placeholder URL for Violet eyes image
  ],
};

const CharacterEditorTabs = () => {
  const [activeTab, setActiveTab] = useState('race');

  return (
    <div className="flex flex-col items-start content-start justify-start overflow-hidden bg-white rounded-lg card max-h-[600px] relative shadow-2xl">
      {/* Tabs */}
      <div className="bg-gray-200 rounded-t-md">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-start">
            <div className="sm:border-gray-200 sm:border-b">
              <nav className="flex flex-wrap -mb-px sm:space-x-6">
                {Object.keys(categories).map((category) => (
                  <button
                    key={category}
                    className={`inline-flex items-center px-4 rounded-t-md mt-2 text-sm font-medium text-gray-500 transition-all duration-200 sm:w-auto sm:border-transparent sm:border-b-2 py-2 hover:text-gray-900 hover:border-gray-300 whitespace-nowrap group ${activeTab === category ? 'text-gray-900 border-gray-300' : ''}`}
                    onClick={() => setActiveTab(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="h-[100%] overflow-hidden overflow-y-scroll">
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {categories[activeTab].map((item) => (
              <div key={item.name} className="relative w-full group rounded-full overflow-hidden bg-gray-700 aspect-1 cursor-pointer">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterEditorTabs;
