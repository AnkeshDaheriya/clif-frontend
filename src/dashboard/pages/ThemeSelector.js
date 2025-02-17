import React from "react";
import { Check } from "lucide-react";

const ThemeSelector = ({ selectedTheme, onThemeChange }) => {
  const themes = [
    {
      id: "classic",
      name: "Classic",
      description: "Professional & Traditional",
      preview: (
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-sm bg-gray-700"></div>
            <div className="space-y-1 flex-1">
              <div className="h-2 w-24 bg-gray-700"></div>
              <div className="h-1 w-20 bg-gray-400"></div>
            </div>
          </div>
          <div className="h-px w-full bg-gray-300"></div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-gray-200"></div>
            <div className="h-1 w-2/3 bg-gray-200"></div>
          </div>
        </div>
      ),
    },
    {
      id: "modern",
      name: "Modern",
      description: "Clean & Contemporary",
      preview: (
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-full bg-blue-600"></div>
            <div className="space-y-1 flex-1">
              <div className="h-2 w-24 bg-blue-600"></div>
              <div className="h-1 w-20 bg-blue-400"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-4 bg-gray-100 rounded"></div>
            <div className="h-4 bg-gray-100 rounded"></div>
          </div>
        </div>
      ),
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple & Elegant",
      preview: (
        <div className="space-y-3">
          <div className="flex justify-center">
            <div className="h-2 w-32 bg-gray-400"></div>
          </div>
          <div className="h-px w-full bg-gray-200"></div>
          <div className="space-y-2">
            <div className="h-1 w-full bg-gray-200"></div>
            <div className="h-1 w-2/3 bg-gray-200"></div>
          </div>
        </div>
      ),
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold & Dynamic",
      preview: (
        <div className="space-y-2">
          <div className="h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-3"></div>
          <div className="grid grid-cols-3 gap-1">
            <div className="h-4 bg-purple-100 rounded"></div>
            <div className="h-4 bg-purple-100 rounded"></div>
            <div className="h-4 bg-purple-100 rounded"></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Choose Theme</h3>
        <p className="text-sm text-gray-500">
          Select a design that best represents your professional style
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <div
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`
              relative cursor-pointer rounded-xl border-2 p-4 transition-all
              hover:shadow-md
              ${
                selectedTheme === theme.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }
            `}
          >
            {selectedTheme === theme.id && (
              <div className="absolute -top-2 -right-2 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
            )}

            <div className="h-24 mb-4 rounded-lg border border-gray-100 bg-white p-3">
              {theme.preview}
            </div>

            <div>
              <h4 className="font-medium text-gray-900">{theme.name}</h4>
              <p className="text-sm text-gray-500">{theme.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
