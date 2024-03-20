const Home: React.FC = () => {
	return (
		<div className='flex justify-center my-2'>
			<div className='border rounded max-w-home-container min-h-task-content-box px-4 pt-2'>
				<p className='pb-4'>
					Welcome to Maple Task Manager, a fully customizable daily and weekly
					tracker with a countdown timer that resets and pings when it's
					completed its countdown.
				</p>
				<p className='pb-4'>
					For feedback and requests, feel free to email me at{' '}
					mapleTaskManager@gmail.com, or create a{' '}
					<a
						className='underline text-green-300'
						href='https://github.com/hyAndrewLee/Maple-Task-Manager'
					>
						Github issue
					</a>
				</p>

				<ul>
					<p>To Do:</p>
					<li>Customizable Timer</li>
					<li>Page Styling</li>
					<li>Add/Edit Tasks</li>
				</ul>
				{/* <p>
					Welcome to Maple Task Manager, your ultimate customizable companion for
					dominating Maple World!
				</p>
				<p>
					Maple Task Manager is here to streamline your MapleStory experience by
					putting you in control. Whether it's your dailies, weeklies, or even
					your countdown timers, everything is fully customizable to suit your
					playstyle and goals.
				</p>
				<p>
					Never miss a beat with our flexible task tracking system, allowing you
					to tailor your daily and weekly tasks exactly how you want them.
					Adjust, add, or remove tasks with ease, ensuring you stay on top of
					your game at all times.
				</p>
				<p>
					And when it comes to timing, we've got you covered. Our customizable
					countdown timer puts the power in your hands, allowing you to set
					intervals for training sessions, quest completion, or any other
					activity you have in mind.
				</p>
				<p>
					With Maple Task Manager, your MapleStory adventure is not only personalized
					but optimized for success. Join the ranks of savvy Maplers who are
					taking their gameplay to new heights with our comprehensive and
					adaptable tool.
				</p>
				<p>Start customizing your MapleStory journey today with Maple Task Manager!</p> */}
			</div>
		</div>
	);
};

export default Home;
