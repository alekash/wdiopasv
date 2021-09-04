import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    it('successful log in', async () => {
        await LoginPage.open();
        await LoginPage.login('pimob39177@naymeo.com', 'Murzilka21');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });
});


