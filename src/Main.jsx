import "./styles/main.css";

export default function Main()
{
  return(
    <main>
      <form className="form-container">
        <div className="form-row">
          <div>
            <label>Top Text</label>
            <br/>
            <input type="text" />
          </div>

          <div>
            <label>Bottom Text</label>
            <br/>
            <input type="text" />
          </div>
        </div>
        
        <button>Generate Meme</button>
      </form>
    </main>
  );
}