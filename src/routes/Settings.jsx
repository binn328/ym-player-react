import AboutTab from "../components/TabParts/AboutTab";
import SecurityTab from "../components/TabParts/SecurityTab";

export default function Settings() {
    return (
        <div role="tablist" className="tabs tabs-lifted tabs-lg">
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab [--tab-bg:oklch(var(--n))]"
                aria-label="Security"
                defaultChecked
            />
            <div role="tabpanel" className="tab-content bg-neutral border-base-300 rounded-box p-6">
                <SecurityTab />
            </div>

            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab [--tab-bg:oklch(var(--n))]"
                aria-label="About"
            />
            <div role="tabpanel" className="tab-content bg-neutral border-base-300 rounded-box p-6">
                <AboutTab />
            </div>
        </div>
    );
}
