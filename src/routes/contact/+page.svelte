<div class="title">
	<h1 class="text-white">Contact Me</h1>
</div>

<div>
	<form class="form mt-12 flex flex-col w-screen items-center" action="/">
		<label class="text-white mt-10" for="name">Name*</label>
		<input
			class="w-72 bg-transparent mt-5 border-4 border-indigo-500/50 rounded-md p-2 text-white"
			type="text"
			name="name"
			id="name"
			placeholder="Carlos"
			required
		/>
		<label class="text-white mt-10" for="lastname">Lastname</label>
		<input
			class="w-72 mt-5 bg-transparent border-4 border-indigo-500/50 p-2 rounded-md text-white"
			type="text"
			name="lastname"
			id="lastname"
			placeholder="Aguado"
		/>
		<label class="text-white mt-10" for="email">E-mail*</label>
		<input
			class="w-72 bg-transparent mt-5 border-4 border-indigo-500/50 p-2 rounded-md text-white"
			type="email"
			name="email"
			id="email"
			placeholder="carlosaguado@icloud.com"
			required
		/>
		<label class="text-white mt-10" for="message">Message*</label>
		<textarea
			class="w-72 bg-transparent mt-5 border-4 border-indigo-500/50 p-2 rounded-md text-white"
			name="message"
			id="message"
			cols="30"
			rows="10"
			placeholder="This is a message!"
			required
		/>
		<button
			class="text-white mt-5 border-4 p-2 rounded-md border-indigo-500/50 hover:bg-indigo-500"
			type="submit">Submit</button
		>
	</form>
</div>
