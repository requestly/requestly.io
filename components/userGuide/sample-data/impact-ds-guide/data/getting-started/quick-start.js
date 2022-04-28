import React from "react";
const QuickStart = () => {
  return (
    <>
      <h2 id="quick-start">Quick start</h2>
      <p>
        This template requires Node and Gulp CLI. Please follow these steps to
        install the required technologies:
      </p>
      <ol>
        <li>Make sure you have Node locally installed.</li>
        <li>
          Download Gulp Command Line Interface to be able to use gulp in your
          Terminal.
        </li>
      </ol>
      <div className="bd-clipboard">
        <button
          type="button"
          className="btn-clipboard"
          title=""
          data-original-title="Copy to clipboard"
        >
          Copy
        </button>
      </div>
      <div className="highlight">
        <pre className="chroma">
          <code className="language-bash" data-lang="bash">
            npm install gulp-cli -g
          </code>
        </pre>
      </div>
      <ol start="3">
        <li>
          After installing Gulp, run npm install in the main{" "}
          <code>impact/</code> folder to download all the project dependencies.
          You’ll find them in the <code>node_modules/</code> folder.
        </li>
      </ol>
      <div className="bd-clipboard">
        <button
          type="button"
          className="btn-clipboard"
          title=""
          data-original-title="Copy to clipboard"
        >
          Copy
        </button>
      </div>
      <div className="highlight">
        <pre className="chroma">
          <code className="language-bash" data-lang="bash">
            npm install
          </code>
        </pre>
      </div>
      <ol start="4">
        <li>
          Run gulp in the <code>impact/</code> folder to serve the project files
          using BrowserSync. Running gulp will compile the theme and open{" "}
          <code>/index.html</code> in your main browser.
        </li>
      </ol>
      <div className="bd-clipboard">
        <button
          type="button"
          className="btn-clipboard"
          title=""
          data-original-title="Copy to clipboard"
        >
          Copy
        </button>
      </div>
      <div className="highlight">
        <pre className="chroma">
          <code className="language-bash" data-lang="bash">
            gulp
          </code>
        </pre>
      </div>
      <p>
        While the gulp command is running, files in the{" "}
        <code>assets/scss/</code>, <code>assets/js/</code> and{" "}
        <code>components/</code> folders will be monitored for changes. Files
        from the <code>assets/scss/</code> folder will generate injected CSS.
      </p>
      <p>
        Hit <code>CTRL+C</code> to terminate the gulp command. This will stop
        the local server from running.
      </p>
      <h2 id="theme-without-sass-gulp-or-npm">
        Theme without Sass, Gulp or Npm
      </h2>
      <p>
        If you’d like to get a version of our theme without Sass, Gulp or Npm,
        we’ve got you covered. Run the following command:
      </p>
      <div className="bd-clipboard">
        <button
          type="button"
          className="btn-clipboard"
          title=""
          data-original-title="Copy to clipboard"
        >
          Copy
        </button>
      </div>
      <div className="highlight">
        <pre className="chroma">
          <code className="language-bash" data-lang="bash">
            gulp build:dev
          </code>
        </pre>
      </div>
      <p>
        This will generate a folder <code>html&amp;css</code> which will have
        unminified CSS, Html and Javascript.
      </p>
      <h2 id="minified-version">Minified version</h2>
      <p>
        If you’d like to compile the code and get a minified version of the HTML
        and CSS just run the following Gulp command:
      </p>
      <div className="bd-clipboard">
        <button
          type="button"
          className="btn-clipboard"
          title=""
          data-original-title="Copy to clipboard"
        >
          Copy
        </button>
      </div>
      <div className="highlight">
        <pre className="chroma">
          <code className="language-bash" data-lang="bash">
            gulp build:dist
          </code>
        </pre>
      </div>
      <p>
        This will generate a folder <code>dist</code> which will have minified
        CSS, Html and Javascript.
      </p>
    </>
  );
};

export default QuickStart;
