function MyButton0() {
  return (
    <button className="button">
      <a href="http://www.My1.im/guys">
        Brink Of Speed, Dashboard and Video Index
      </a>
    </button>
  );
}
function MyButton() {
  return (
    <button>
      <a href="http://www.OpticalAutomation.com">OpticalAutomation</a>
    </button>
  );
}

function MyButton1() {
  return (
    <button>
      <a href="http://www.JamesAvakian.com">James Avakian</a>
    </button>
  );
}

function MyButton2() {
  return (
    <button>
      <a href="https://todo-firebase-login.vercel.app/dashboard">
        A private Brink Of Speed, sugestion access
      </a>
    </button>
  );
}
function MyButton3() {
  return (
    <button className="between">
      <a href="https://www.CoolJimmy.com">
        My handle, a new Corvette website in time
      </a>
    </button>
  );
}

export default function MyApp() {
  return (
    <>
      <div>
        <h2>Welcome to 'Brink Of Speed' Video Index!</h2>

        <table>
          <tr>
            <th>Website</th>
            <th>Description</th>
          </tr>

          <tr>
            <td>
              <MyButton0 />
            </td>
            <h3 className="between">The Product</h3>
          </tr>
          <tr>
            <td>
              <MyButton />
            </td>
            <h3>Company Website</h3>
          </tr>
          <tr>
            <td>
              <MyButton1 />
            </td>
            <h3>My Website</h3>
          </tr>
          <tr>
            <td>
              <MyButton2 />
            </td>
            <h3>Your guys sugestion box</h3>
          </tr>
          <tr>
            <td>
              <MyButton3 />
            </td>
            <h3>A Corvette Photo Album and Information</h3>
          </tr>
        </table>
      </div>
    </>
  );
}
