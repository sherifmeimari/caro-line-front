import '../src/globals.css';

// Entry Point of the app - App Component
// index.js (Landing Page) comes after

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      {/* header */}

      <div>
        <Component />
      </div>
    </div>
  );
};

export default AppComponent;
