import { Fragment } from "react";

// Returns JSX for the `full` text with the `highlight` text in <mark> elements.
// Eg, {full: "Fulmarus glacialis", highlight: "fulmar"} => <><mark>Fulmar</mark>us glacialis</>

// Adapted from https://thewebdev.info/2021/11/13/how-to-highlight-text-using-react/
export default function Highlight(props: {full: string, highlight: string}) {
    const {full, highlight} = props;
    const regex = new RegExp(`(${highlight.trim()})`, "i");
    const parts = full.split(regex);
    return (<>
        {parts.filter(String).map((part, i) => {
            return regex.test(part) ? (
              <mark key={i}>{part}</mark>
            ) : (
              <Fragment key={i}>{part}</Fragment>
            );
          })}
    </>)
}
