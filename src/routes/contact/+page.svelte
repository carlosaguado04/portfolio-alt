<main class="absolute mt-32 w-screen -z-10">
	<h1 class="magic title text-white text-center text-5xl">Contact me</h1>

	<form class="form mt-12 flex flex-col w-screen items-center" action="/">
		<label for="name" class="text-white">Name</label>
		<input
			type="text"
			class="form-input rounded-xl bg-transparent text-white border-2 focus:border-purple-100 w-96"
		/>
		<label for="surname" class="text-white mt-12">Surname</label>
		<input
			type="text"
			class="form-input rounded-xl bg-transparent w-96 text-white border-2 focus:border-purple-100"
		/>
		<label for="surname" class="text-white mt-12">Email</label>
		<input
			type="email"
			class="form-input rounded-xl bg-transparent w-96 text-white border-2 focus:border-purple-100"
		/>
		<label for="message" class="text-white mt-12">Message</label>
		<textarea
			name="message"
			id="message"
			cols="30"
			rows="10"
			class="form-textarea bg-transparent text-white border-2 rounded-xl focus:border-purple-100"
		/>
		<button
			class="mt-12 border border-white rounded-xl text-white px-10 hover:bg-purple-100 hover:text-black"
			type="submit">Submit</button
		>
	</form>
</main>
