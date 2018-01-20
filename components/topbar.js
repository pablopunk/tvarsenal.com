export default () => (
  <div>
    <nav className='top-bar'>
      <img src='https://file-hyenqwiapj.now.sh/' />
    </nav>
    <style jsx>{`
      .top-bar {
        display: flex;
        position: fixed;
        width: 100%;
        z-index: 1;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        margin-top: -120px;
        padding: 15px 0;
      }
      .top-bar img {
        width: 100px;
      }
    `}</style>
  </div>
)
