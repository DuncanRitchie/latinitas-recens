import Highlight from "./Highlight";

export default function Record(props: {record: string, q: string}) {
    const {record, q} = props;
    const [head, ...tail] = record.split('--');
    const tailAsString = tail.join('--');

    return (
        <p key={record}>
            <strong><dfn lang='la'><Highlight full={head} highlight={q}/></dfn></strong>
            --<Highlight full={tailAsString} highlight={q}/>
        </p>
    )
}
