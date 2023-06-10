import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";
import "./keyFeature.scss";

const KeyFeature = () => {
  return (
    <>
      <div className="key-feature">
        <div className="para">
          <button>Key Features</button>
          <h1>Why use Atomize React?</h1>
          <p>
            Atomize React helps you in building fully responsive websites <br />
            and products that match your style.
          </p>
        </div>
        <div className="cards">
          <KeyFeatureCard
            img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRkZDMTQ4IiByeD0iMyIvPgogICAgPHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMS41IDFMMjEuNSAzMU0xMC41IDFMMTAuNSAzMSIvPgogIDwvZz4KPC9zdmc+Cg=="
            title="Flexible Grid"
            desc="Change grid variables or give decimal column size."
            linkText="See how"
            link="https://atomizecode.com/docs/react/theme#columnCount"
          />
          <KeyFeatureCard
            img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRkY2QjM4IiByeD0iMyIvPgogICAgPHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yLjczMzc2MDY3LDkuNDI0MzMxMDkgQzIuNTQ0NTAyMzEsOS4yMTk5MzIwNiAyLjI3ODU2MzYyLDkuMTAzNzM5MTIgMiw5LjEwMzczOTEyIEMxLjQ0NzcxNTI1LDkuMTAzNzM5MTIgMSw5LjU1MTQ1NDM3IDEsMTAuMTAzNzM5MSBMMSwyOSBDMSwzMC4xMDQ1Njk1IDEuODk1NDMwNSwzMSAzLDMxIEwyMC40MjI0NjM4LDMxIEMyMC42NzQzODQxLDMxIDIwLjkxNzAyMjYsMzAuOTA0OTE3MyAyMS4xMDE4NzE4LDMwLjczMzc2MDcgQzIxLjUwNzExNjYsMzAuMzU4NTM0IDIxLjUzMTQ1MTEsMjkuNzI1ODM2OCAyMS4xNTYyMjQ1LDI5LjMyMDU5MiBMMi43MzM3NjA2Nyw5LjQyNDMzMTA5IFoiLz4KICA8L2c+Cjwvc3ZnPgo="
            title="Style guide"
            desc="Update theme throughout the application easily."
            linkText="See how"
            link="https://atomizecode.com/docs/react/theme#availableColors"
          />
          <KeyFeatureCard
            img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMUNEQjlFIiByeD0iMyIvPgogICAgPHJlY3Qgd2lkdGg9IjExIiBoZWlnaHQ9IjExIiB4PSIyMCIgeT0iMjAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHg9IjEiIHk9IjEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4K"
            title="Spacing"
            desc="A better and controlled way of update spacing."
            linkText="See how"
            link="https://atomizecode.com/docs/react/spacing"
          />
          <KeyFeatureCard
            img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjE2IiB4PSIyMCIgeT0iMTYiIGZpbGw9IiM0M0E0RkYiIHJ4PSIzIi8+CiAgICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMTEiIGZpbGw9IiM0M0E0RkYiIHJ4PSIzIi8+CiAgICA8cmVjdCB3aWR0aD0iMTEiIGhlaWdodD0iMTQiIHg9IjEiIHk9IjE3IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+Cg=="
            title="Responsive"
            desc="Better control to make the app responsive."
            linkText="See how"
            link="https://atomizecode.com/docs/react/responsive"
          />
        </div>
      </div>
      <hr
        className="Hr"
        style={{
          width: "75%",
          color: "gray",
          margin: "80px auto",
          borderBottom: ".5px solid gray",
          border: "none",
          height: "1px",
          backgroundColor: "#ccc",
        }}
      />
    </>
  );
};

export default KeyFeature;
