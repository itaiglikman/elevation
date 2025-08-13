import { useEffect, useState } from "react";
import { FontSizeContext, fontSizeEnum, ThemeContext, themeEnum, useFontSize, useTheme } from "./ThemeContext";



function App() {
    const [theme, setTheme] = useState(themeEnum.light);
    const [fontSize, setFontSize] = useState(fontSizeEnum.medium);

    useEffect(() => {
        const localResults = localStorage.getItem('preferences');
        if (localResults) {
            const preferences = JSON.parse(localResults);
            setTheme(preferences.savedTheme || themeEnum.light);
            setFontSize(preferences.savedFontSize || fontSizeEnum.medium);
        }
        else {
            setTheme(themeEnum.light);
            setFontSize(fontSizeEnum.medium);
        }
    }, [])

    useEffect(() => {
        const savedPreferences = { savedTheme: theme, savedFontSize: fontSize };
        localStorage.setItem('preferences', JSON.stringify(savedPreferences));
    }, [theme, fontSize])


    return (
        <ThemeContext value={[theme, setTheme]}>
            <FontSizeContext value={[fontSize, setFontSize]}>
                <Layout />
            </FontSizeContext>
        </ThemeContext>
    );
}

function Layout() {
    const [theme] = useTheme();
    const bgColor = theme === themeEnum.light ? '#ffffff' : '#1a1a1a';
    const color = theme === themeEnum.light ? '#000000' : '#ffffff';

    return (
        <div style={{ backgroundColor: bgColor, color, minHeight: '100vh', padding: '20px' }}>
            <Header />
            <Content />
        </div>
    );
}

function Header() {
    return (
        <header style={{ marginBottom: '20px' }}>
            <Navigation />
            <Controls />
        </header>
    );
}

function Navigation() {
    const [fontSize] = useFontSize()
    const size = fontSize === fontSizeEnum.small ? '14px' : fontSize === fontSizeEnum.large ? '20px' : '16px';

    return (
        <nav style={{ fontSize: size, marginBottom: '10px' }}>
            <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
        </nav>
    );
}

function Controls() {
    return (
        <div>
            <ThemeToggle />
            <FontControl />
        </div>
    );
}

function ThemeToggle() {
    const [theme, setTheme] = useTheme();
    return (
        <button onClick={() => setTheme(theme === themeEnum.light ? themeEnum.dark : themeEnum.light)}>
            {theme === themeEnum.light ? 'Dark' : 'Light'} Mode
        </button>
    );
}

function FontControl() {
    const [fontSize, setFontSize] = useFontSize();
    return (
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value as fontSizeEnum)}>
            <option value={fontSizeEnum.small}>Small</option>
            <option value={fontSizeEnum.medium}>Medium</option>
            <option value={fontSizeEnum.large}>Large</option>
        </select>
    );
}

function Content() {
    const [fontSize] = useFontSize();
    const size = fontSize === fontSizeEnum.small ? '14px' : fontSize === fontSizeEnum.large ? '20px' : '16px';

    return (
        <main style={{ fontSize: size }}>
            <Article />
            <Sidebar />
        </main>
    );
}

function Article() {
    const [theme] = useTheme();
    return (
        <article>
            <h1>Article Title</h1>
            <p>This content uses the {theme} theme. Notice how theme props are passed through every component!</p>
        </article>
    );
}

function Sidebar() {
    const [theme] = useTheme();
    return (
        <aside style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>Sidebar</h3>
            <p>Current theme: {theme}</p>
        </aside>
    );
}

export default App;
