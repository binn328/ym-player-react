import Icon from "@mdi/react";
import { mdiAccountKey, mdiKey } from "@mdi/js";

export default function SecurityTab() {
    return (
        <div>
            <div className="flex">
                <strong className="mb-4 text-lg">Current Login User: binn328</strong>
            </div>
            <div className="flex">
                <button className="btn btn-error">Logout</button>
            </div>
            <div className="divider" />
            <div>
                <div className="flex">
                    <strong className="mb-4 text-lg">Change Password</strong>
                </div>
                <div>
                    <form>
                        <label className="input input-bordered flex items-center gap-2">
                            <Icon path={mdiAccountKey} size={1} />
                            <input
                                type="password"
                                className="grow"
                                placeholder="Current Password"
                                required
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <Icon path={mdiKey} size={1} />
                            <input
                                type="password"
                                className="grow"
                                placeholder="New Password"
                                required
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <Icon path={mdiKey} size={1} />
                            <input
                                type="password"
                                className="grow"
                                placeholder="Confirm new Password"
                                required
                            />
                        </label>
                        <div className="mt-2 flex justify-end">
                            <input type="submit" className="btn btn-primary" value="Confirm" />
                        </div>
                    </form>
                </div>
            </div>

            <div></div>
        </div>
    );
}
