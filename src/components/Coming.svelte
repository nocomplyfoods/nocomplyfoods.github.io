<!-- <div class="coming">
	<img
		src="assets/images/burger.png"
		alt="skateboarding burger"
		aria="hidden"
	/>
	<div class="stay">
		<p>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://nocomplyfoods.beehiiv.com/subscribe">Newsletter</a
			>
		</p>
		<p>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://instagram.com/nocomplyfoods">Instagram</a
			>
		</p>
	</div>
</div> -->

<style>
	.coming {
		padding: 16px;
		margin-top: 16px;
		text-align: center;
		overflow: hidden;
		pointer-events: none;
		position: fixed;
		bottom: 64px;
		left: 50%;
		margin: 0;
		transform: translate(-50%, 0%);
		text-align: center;
		width: 100%;
	}

	.stay {
		margin-top: 32px;
		pointer-events: auto;
	}

	img {
		display: block;
		width: 50%;
		max-width: 280px;
		margin: 0 auto 8px auto;
		transform-origin: 20% 80%;
		animation: slideAndRotate 1s ease-out forwards;
	}

	@media only screen and (min-width: 640px) {
		img {
			animation: slideAndRotate 2s ease-out forwards;
		}
	}

	@keyframes slideAndRotate {
		0% {
			transform: translateX(-80vw) rotate(-10deg);
		}
		95% {
			transform: translateX(0) rotate(-10deg);
		}
		100% {
			transform: translateX(0) rotate(0deg);
		}
	}
</style>
