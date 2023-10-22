import Link from 'next/link';
import { BsCreditCardFill } from 'react-icons/bs';
import { FcPlanner } from 'react-icons/fc';
import { GrMoney, GrNotes } from 'react-icons/gr';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import ModuleCard from '../ui/card/ModuleCard';

const Modules = () => {
	return (
		<div className="grid place-items-center w-full h-full">
			<div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full m-auto md:max-w-[75%] xl:max-w-[50%] ">
				<Link
					className="w-full"
					href="/hisab"
				>
					<ModuleCard
						text="Hisab"
						icon={<GrMoney />}
					/>
				</Link>
				<Link
					className="w-full"
					href="/planner"
				>
					<ModuleCard
						text="Planner"
						icon={<FcPlanner />}
					/>
				</Link>
				<Link
					className="w-full"
					href="/note"
				>
					<ModuleCard
						text="Note"
						icon={<GrNotes />}
					/>
				</Link>
				<Link
					className="w-full"
					href="/video-player"
				>
					<ModuleCard
						text="Video Player"
						icon={<MdOutlineVideoLibrary />}
					/>
				</Link>
				<Link
					className="w-full"
					href="/payment"
				>
					<ModuleCard
						text="Payment"
						icon={<BsCreditCardFill />}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Modules;
