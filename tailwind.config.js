module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
	fontFamily: {
		'kdam': ['Kdam Thmor Pro','monospace'],
        'questrial': ['Questrial','monospace'],
		'cursive': ['cursive'],
        'exo': ['Exo 2'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        'russo': ['Russo One', 'monospace']
    },
    letterSpacing: {
            'tight': '-.015em',
    },
    extend: {
        height: {
            'almost-screen': '90vh',
            'half-screen': '50vh',
        },
        animation: {
            'pulseText': 'pulseText 2s linear infinite',
            'softPulse': 'softPulse 2s linear infinite',
        },
        keyframes: {
            pulseText: {
              '0%, 100%': { opacity: 1.0 },
              '50%': { opacity: 0.7 },
            },
            softPulse: {
                '0%, 100%': { opacity: 1.0 },
                '50%': { opacity: 0.95 },
            }
        }
    }
    },
    plugins: [
        require('daisyui'),
        require("@tailwindcss/forms"),
    ]
}