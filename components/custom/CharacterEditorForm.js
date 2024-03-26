import React from "react";

const options = {
  races: [
    "Human",
    "Elf",
    "Dwarf",
    "Halfling",
    "Dragonborn",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Tiefling",
  ],
  classes: [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ],
  artStyles: ["Realistic", "Cartoon", "Anime", "Watercolor", "Oil Painting"],
  hairColors: [
    "Black",
    "Brown",
    "Blonde",
    "Red",
    "White",
    "Grey",
    "Blue",
    "Green",
  ],
  eyeColors: ["Brown", "Blue", "Green", "Grey", "Hazel", "Red", "Violet"],
  genders: ["Male", "Female", "Non-Binary"],
};

const CharacterEditorForm = (props) => {
  const { selections, handleChange } = props;
  return (
    <div className="p-4 w-full">
      <form className="space-y-4">
        {Object.entries(options).map(([key, values]) => (
          <div key={key}>
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              {key}
            </label>
            <select
              id={key}
              name={key}
              value={selections[key]}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a {key}</option>
              {values.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Character
        </button>
      </form>
    </div>
  );
};

export default CharacterEditorForm;
