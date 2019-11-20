document.addEventListener('DOMContentLoaded', ()=>{
	const username = document.getElementById('username');
	const password = document.getElementById('password');
	const signIn = document.getElementById('signIn');
	const register = document.getElementById('register');
	const form = document.getElementById('form');
	const paragraph = document.getElementById('paragraph');

	register.addEventListener('click', () => {
		e.preventDefault();
		const name = username.value;
		const pwd = password.value;
		localStorage.setItem('name', username.value);		
		localStorage.setItem('password', password.value);
	})

	signIn.addEventListener('click', (e) => {
		e.preventDefault();
		const name = username.value;
		const pwd = password.value;
		const storedName = localStorage.getItem('name');
		const storedPwd = localStorage.getItem('password');
		const p = document.createElement('p');
		p.dataset.message = "message";

		const check = document.querySelector('[data-message="message"]');
		if (check) {
			check.remove();
		}

		if (name === storedName && pwd === storedPwd) {
			p.innerHTML = `<span class='success'>You successfully logged in</span>`
			form.insertBefore( p, paragraph );
		}
		else {
			p.innerHTML = `<span class='rejected'>You entered invalid username or password</span>`
			form.insertBefore( p, paragraph );
		}
	})

})