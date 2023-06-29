export default {
  loginBtnText: 'LOGIN',
  logout: 'Logout',
  addUser: 'Add User',
  cancelBtn: 'Cancel',
  yes: 'Yes',
  saveChanges: 'Save Changes',
  splashScreenMessage: 'Loading Awesomeness...!',
  loginToContinue: 'Login to Continue',
  welcomeMessage: 'Welcome to UserHub',
  home: 'Home',
  userDetails: 'User details',
  register: 'Sign Up',
  notAUser: 'Not a user? Sign up',
  signUp: 'Signup to continue',
  alreadyUser: 'Already registered? Login',
  invalidCredentials: 'Invalid credentials !',
  dataSavedSuccessfully: 'Data saved sucessfully !',
  someThingWentWrong: 'Something went wrong!',
  loginErrorMessage: 'Your credentials may be invalid !',
  deleteConfirmationHeader: 'Are you sure?',
  deleteConfirmationMessage: 'You really want to delete this user?',
  searchUser: 'Search here...',
  emptyString: '',
  yupErrors: {
    emailError: 'Please enter valid email',
    passwordEmpty: 'Please enter your password',
    passwordInvalid:
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    nameInvalid: 'Please enter valid name',
  },
  formInputNames: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
  },
  bottomNavigationTitles: {
    home: 'Home',
    create: 'Create',
    videos: 'Videos',
    profile: 'Profile',
  },
};
export enum NavigationRoutes {
  SplashScreen = 'SPLASHSCREEN',
  DashBoardDrawer = 'DASHBORADDRAWER',
  CreateUserScreen = 'CREATEUSERSCREEN',
  VideoScreen = 'VIDEOSCREEN',
  ProfileScreen = 'PROFILESCREEN',
  HomeStack = 'HOMESTACK',
  NotificationScreen = 'NOTIFICATIONSCREEN',
  HomeScreen = 'HOMESCREEN',
  SettingsScreen = 'SETTINGSSCREEN',
  DetailsScreen = 'DETAILSSCREEN',
  LoginScreen = 'LOGINSCREEN',
  SignUpScreen = 'SIGNUPSCREEN',
  HomeTabs = 'HOMETABS',
}
