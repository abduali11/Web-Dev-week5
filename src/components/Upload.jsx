import{ useState } from 'react';

export const Upload = () => {

  const [file, setFile] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Yritetään lähettää tiedostoa');
    console.log(event);
    console.log(file, name)
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type="file" name="tiedosto" onChange={handleFileChange} />
        <label htmlFor="name">Nimi</label>

        <input type="text" id="name" name="name" onChange={(event) =>
          setName(event.target.value)} />


        <button className="m-3 mt-0 rounded-lg bg-stone-500 p-3 text-stone-50 " type="submit">Upload file</button>
      </form>
    </>
  );
}

export default Upload;
