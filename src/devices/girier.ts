import * as reporting from "../lib/reporting";
import * as tuya from "../lib/tuya";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        fingerprint: tuya.fingerprint("TS0001", ["_TZ3000_majwnphg", "_TZ3000_6axxqqi2", "_TZ3000_zw7yf6yk"]),
        model: "JR-ZDS01",
        vendor: "Girier",
        description: "1 gang mini switch",
        extend: [tuya.modernExtend.tuyaOnOff({switchType: true})],
        configure: async (device, coordinatorEndpoint) => {
            await reporting.bind(device.getEndpoint(1), coordinatorEndpoint, ["genOnOff"]);
        },
    },
];
