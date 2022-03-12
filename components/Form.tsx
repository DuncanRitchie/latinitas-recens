export default function Form({q}) {
    return (<form>
        <label htmlFor='q'>
            Text to find in Latinitas Recens:{' '}
            <input type='text' name='q'id='q' defaultValue={q}/>
        </label>
        <button type='submit'>Search</button>
    </form>)
}
