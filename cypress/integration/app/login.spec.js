import LoginPage from 'pages/LoginPage';

describe("Login from testrail",()=>{
//instance
   const loginPage = new LoginPage();

//variable de test
   const name = 'aouedraogo@nehemiecreation.com';
   const password = 'Adam@7484';


  it("this test connect to testrail app",()=>{
    loginPage.visit();
    loginPage.login(name,password);

  })
})
