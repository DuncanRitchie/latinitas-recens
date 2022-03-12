export default function Record(props: {record: string, q: string}) {
    const {record, q} = props;
    const [head, ...tail] = record.split('--');
    return (<p key={record}><strong>{head}</strong>--{tail}</p>)
}
