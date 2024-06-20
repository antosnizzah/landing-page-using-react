

const Body = () => {
  return (
    <div className="body">
      <h1>Designed for the future</h1>
      <div className="content">
        <div className="text-section">
          <div className="paragraph">
            <h2>Introducing an extensible editor</h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
            </p>
          </div>
          <div className="paragraph">
            <h2>Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding
              customized categories, sections, format, or flow. With this functionality, you're in full control.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img src="images\illustration-editor-desktop.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
