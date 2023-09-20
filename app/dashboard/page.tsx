import Card from "@/components/ui/card/Card";
import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import { VscTypeHierarchy } from "react-icons/vsc";

const page = () => {
	return (
		<>
			<div className="grid grid-cols-12 gap-4">
				<Link
					className="col-span-3"
					href="/dashboard/users"
				>
					<Card
						title="Users"
						value="10"
						icon={<FiUsers />}
					/>
				</Link>
				<Link
					className="col-span-3"
					href="/dashboard/types"
				>
					<Card
						title="Types"
						icon={<VscTypeHierarchy />}
						value="4"
					/>
				</Link>
			</div>
		</>
	);
};

export default page;
