
It appears that the functionality previously present in the react-cookie npm package has been moved to universal-cookie. The relevant example from the universal-cookie repository now is:

```
import Cookies from 'universal-cookie';
const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat')); // Pacman

```
