import { getOrError, randomChoice } from "./util"

/**
 * Returns the duration of the given sound in seconds.
 * @param soundName Name of the sound.
 */
export function getSoundDuration(soundName: string) {
    // See if we already stored the duration of the sound.
    if (soundDurations[soundName]) {
        return soundDurations[soundName]
    }

    // This doesn't seem to always work, not sure why. Often returns 0.
    const anyEntity = getOrError(Entities.Next(undefined), "Could not find any entity")
    const duration = anyEntity.GetSoundDuration(soundName, "")

    // Cache the sound duration
    if (duration > 0) {
        soundDurations[soundName] = duration
    } else {
        Warning(`GetSoundDuration() returned 0 for sound ${soundName}.`)
    }

    return duration
}

// GetSoundDuration returns 0 pretty often for some reason so we're storing the durations here.
export const soundDurations: Record<string, number> = {
    "Script_1_Opening_1": 4.282250,
    "Script_1_Opening_2": 8.765000,
    "Script_1_Opening_3": 1.702063,
    "Script_1_Opening_4": 2.275437,
    "Script_1_Opening_5": 5.064125,
    "Script_1_Opening_6": 3.344000,
    "Script_1_Opening_7": 5.064125,
    "Script_1_Opening_8": 9.729313,
    "Script_1_Opening_9": 4.959875,
    "Script_1_Opening_10": 6.263000,
    "Script_1_Opening_11": 2.249375,
    "Script_1_Movement_1": 11.657937,
    "Script_1_Movement_2": 2.301500,
    "Script_1_Movement_3": 4.230125,
    "Script_1_Movement_4": 4.751375,
    "Script_1_Movement_5": 7.722500,
    "Script_1_Movement_6": 4.725313,
    "Script_1_Movement_7": 2.066937,
    "Script_1_Movement_8": 7.826750,
    "Script_1_Movement_9": 2.066937,
    "Script_1_Movement_9_1": 2.588188,
    "Script_1_Movement_10": 2.040875,
    "Script_1_Movement_10_1": 1.337187,
    "Script_1_Movement_10_2": 1.649938,
    "Script_1_Movement_11": 13.273813,
    "Script_1_Camera_1": 5.715687,
    "Script_1_Camera_2": 13.716875,
    "Script_1_Camera_3": 2.275437,
    "Script_1_Camera_5": 8.061312,
    "Script_1_Camera_7": 6.132688,
    "Script_1_Camera_8": 3.787063,
    "Script_1_Camera_9": 4.386500,
    "Script_1_Camera_10": 1.363250,
    "Script_1_Leveling_1": 27.608187,
    "Script_1_Leveling_2": 14.498750,
    "Script_1_Leveling_3": 4.151937,
    "Script_1_Leveling_4": 6.341188,
    "Script_1_Leveling_4_2": 185.182063,
    "Script_1_Leveling_5": 12.335562,
    "Script_1_Leveling_6": 8.452250,
    "Script_1_Leveling_7": 1.441437,
    "Script_1_Leveling_8": 1.128688,
    "Script_1_Leveling_9": 8.765000,
    "Script_1_Leveling_10": 14.550875,
    "Script_1_BreatheFire_1": 1.597813,
    "Script_1_BreatheFire_2": 12.830750,
    "Script_1_BreatheFire_3": 1.415375,
    "Script_1_BreatheFire_3_failed": 3.344000,
    "Script_1_BreatheFire_4": 4.047688,
    "Script_1_BreatheFire_5": 13.065312,
    "Script_1_Shop_1": 3.943437,
    "Script_1_Shop_2": 12.022813,
    "Script_1_Shop_3": 16.218875,
    "Script_1_Shop_4": 14.394500,
    "Script_1_Shop_5": 6.862438,
    "Script_1_Shop_7": 18.616625,
    "Script_1_Closing_1": 11.944625,
    "Script_1_Closing_2": 1.102625,
    "Script_1_Closing_3": 10.224500,
    "Script_1_Closing_4": 5.611438,
    "Script_1_Closing_5": 6.263000,
    "Script_1_Closing_6": 24.350375,
    "Script_2_Opening_1": 7.722500,
    "Script_2_Opening_2": 2.145125,
    "Script_2_Opening_3": 3.917375,
    "Script_2_Opening_4": 8.634688,
    "Script_2_Opening_5": 5.872063,
    "Script_2_Opening_6": 16.010375,
    "Script_2_Opening_7": 8.504375,
    "Script_2_Opening_8": 16.036438,
    "Script_2_Opening_9": 21.040437,
    "Script_2_Opening_9_1": 2.119063,
    "Script_2_Opening_10": 17.912938,
    "Script_2_Opening_11": 3.995563,
    "Script_2_Opening_12": 1.232938,
    "Script_2_Opening_13": 5.168375,
    "Script_2_Creeps_1": 11.293062,
    "Script_2_Creeps_2": 9.468687,
    "Script_2_Creeps_3": 10.641500,
    "Script_2_Creeps_4": 2.327562,
    "Script_2_Creeps_5": 1.962687,
    "Script_2_Creeps_6": 2.040875,
    "Script_2_Creeps_7": 1.493562,
    "Script_2_Creeps_8": 2.927000,
    "Script_2_Creeps_9": 2.431812,
    "Script_2_Creeps_10": 2.093000,
    "Script_2_Creeps_11": 15.150313,
    "Script_2_Creeps_12": 2.744562,
    "Script_2_Creeps_13": 3.578562,
    "Script_2_Creeps_14": 7.931000,
    "Script_2_Creeps_15": 11.657937,
    "Script_2_Creeps_16": 2.249375,
    "Script_2_Creeps_17": 3.344000,
    "Script_2_Creeps_18": 2.119063,
    "Script_2_Creeps_18_1": 2.640312,
    "Script_2_Creeps_18_2": 3.787063,
    "Script_2_Creeps_18_3": 2.223313,
    "Script_2_Creeps_19": 6.289062,
    "Script_2_Creeps_20": 15.072125,
    "Script_2_Creeps_21": 1.988750,
    "Script_2_Creeps_22": 7.201250,
    "Script_2_Creeps_23": 3.396125,
    "Script_2_Creeps_24": 1.806312,
    "Script_2_Creeps_25": 2.483938,
    "Script_2_Tower_1": 3.891313,
    "Script_2_Tower_2": 13.586562,
    "Script_2_Tower_3": 6.758188,
    "Script_2_Tower_4": 11.970688,
    "Script_2_Tower_5": 10.042063,
    "Script_2_Tower_6": 14.707250,
    "Script_2_Tower_7": 6.210875,
    "Script_2_Tower_8": 9.025625,
    "Script_2_Tower_9": 12.413750,
    "Script_2_Tower_10": 1.858437,
    "Script_2_Tower_11": 7.826750,
    "Script_2_Tower_12": 9.885687,
    "Script_2_Tower_13": 4.751375,
    "Script_2_Tower_14": 4.490750,
    "Script_2_Tower_15": 1.832375,
    "Script_2_Tower_16": 9.599000,
    "Script_2_Tower_17": 3.787063,
    "Script_2_Tower_18": 5.220500,
    "Script_2_Courier_1": 5.142313,
    "Script_2_Courier_2": 7.540063,
    "Script_2_Courier_3": 16.088562,
    "Script_2_Courier_4": 14.290250,
    "Script_2_Courier_5": 7.097000,
    "Script_2_Courier_6": 10.563313,
    "Script_2_Courier_7": 8.348000,
    "Script_2_Courier_8": 8.530437,
    "Script_2_Courier_9": 3.891313,
    "Script_2_Courier_10": 5.429000,
    "Script_2_Courier_11": 8.478312,
    "Script_2_Courier_12": 8.556500,
    "Script_2_Courier_13": 4.360437,
    "Script_3_Opening_1": 17.391687,
    "Script_3_Opening_2": 11.762187,
    "Script_3_Opening_3": 16.453437,
    "Script_3_Opening_5": 15.801875,
    "Script_3_Opening_6": 2.562125,
    "Script_3_Opening_7": 7.435812,
    "Script_3_Opening_8": 0.842000,
    "Script_3_Opening_9": 4.855625,
    "Script_3_Opening_10": 6.080563,
    "Script_3_Opening_11": 3.005187,
    "Script_3_Opening_12": 11.188812,
    "Script_3_Opening_13": 13.117437,
    "Script_3_Opening_14": 18.538438,
    "Script_3_Opening_15": 1.806312,
    "Script_3_Opening_16": 4.438625,
    "Script_3_Opening_17": 17.000750,
    "Script_3_Opening_18": 24.063688,
    "Script_3_Opening_19": 8.295875,
    "Script_3_Opening_20": 3.917375,
    "Script_3_Opening_20_1": 5.689625,
    "Script_3_Opening_21": 2.588188,
    "Script_3_Opening_22": 3.500375,
    "Script_3_Opening_23": 3.005187,
    "Script_3_Opening_24": 2.353625,
    "Script_3_Opening_25": 13.769000,
    "Script_3_Opening_25_1": 16.010375,
    "Script_3_Opening_26": 11.188812,
    "Script_3_Neutrals_1": 13.638687,
    "Script_3_Neutrals_2": 14.290250,
    "Script_3_Neutrals_3": 15.593375,
    "Script_3_Neutrals_4": 2.510000,
    "Script_3_Neutrals_5": 0.711688,
    "Script_3_Neutrals_6": 19.059687,
    "Script_3_Neutrals_7": 1.884500,
    "Script_3_Neutrals_8": 4.125875,
    "Script_3_Neutrals_9": 9.468687,
    "Script_3_Neutrals_10": 4.256188,
    "Script_3_Neutrals_11": 8.035250,
    "Script_3_Neutrals_12": 4.806531,
    "Script_3_Neutrals_13": 1.180813,
    "Script_3_Neutrals_14": 3.708875,
    "Script_4_Opening_1": 4.777437,
    "Script_4_Opening_2": 8.035250,
    "Script_4_Opening_3": 7.331563,
    "Script_4_Opening_4": 10.198438,
    "Script_4_Opening_5": 10.771812,
    "Script_4_Opening_6": 0.946250,
    "Script_4_Opening_7": 8.087375,
    "Script_4_Opening_8": 1.676000,
    "Script_4_Opening_9": 6.966687,
    "Script_4_Opening_10": 2.301500,
    "Script_4_Opening_11": 7.018813,
    "Script_4_Opening_12": 3.031250,
    "Script_4_Opening_13": 5.950250,
    "Script_4_Opening_14": 11.475500,
    "Script_4_Opening_15": 11.423375,
    "Script_4_Opening_16": 4.308313,
    "Script_4_Opening_17": 2.093000,
    "Script_4_Opening_18": 10.198438,
    "Script_4_Wards_1": 2.249375,
    "Script_4_Wards_2": 15.150313,
    "Script_4_Wards_3": 2.953063,
    "Script_4_Wards_4": 4.621062,
    "Script_4_Wards_5": 1.285062,
    "Script_4_Wards_6": 7.409750,
    "Script_4_Wards_7": 9.338375,
    "Script_4_Wards_8": 13.039250,
    "Script_4_Wards_9": 8.530437,
    "Script_4_Wards_10": 3.344000,
    "Script_4_Wards_11": 5.950250,
    "Script_4_Wards_12": 19.528813,
    "Script_4_Wards_14": 4.881687,
    "Script_4_Wards_15": 6.132688,
    "Script_4_Outpost_1": 4.647125,
    "Script_4_Outpost_2": 2.874875,
    "Script_4_Outpost_3": 2.588188,
    "Script_4_Outpost_4": 2.327562,
    "Script_4_Outpost_5": 7.566125,
    "Script_4_Outpost_6": 15.749750,
    "Script_4_Outpost_7": 2.927000,
    "Script_4_Outpost_8": 4.256188,
    "Script_4_Outpost_9": 2.171187,
    "Script_4_Outpost_10": 3.865250,
    "Script_4_Outpost_11": 14.472687,
    "Script_4_Communication_1": 5.246562,
    "Script_4_Communication_2": 6.367250,
    "Script_4_Communication_3": 7.097000,
    "Script_4_Communication_4": 5.012000,
    "Script_4_Communication_5": 8.843188,
    "Script_4_Communication_6": 2.796687,
    "Script_4_Communication_7": 2.744562,
    "Script_4_Communication_8": 6.992750,
    "Script_4_Communication_9": 3.604625,
    "Script_4_Communication_10": 14.029625,
    "Script_4_Communication_11": 17.443812,
    "Script_4_Communication_12": 7.123062,
    "Script_4_Communication_13": 8.348000,
    "Script_4_Communication_14": 2.040875,
    "Script_4_Communication_15": 0.529250,
    "Script_4_Communication_16": 7.070938,
    "Script_4_Communication_17": 6.784250,
    "Script_4_RTZ_getaway": 0.972313,
    "Script_4_RTZ_foundme": 1.076563,
    "Script_4_RTZ_cya": 1.285062,
    "Script_4_RTZ_death": 1.259000,
    "Script_4_RTZ_pain": 0.633500,
    "Script_4_mason_mad": 3.031250,
    "Script_5_Opening_1": 5.142313,
    "Script_5_Opening_2": 6.315125,
    "Script_5_Opening_3": 6.992750,
    "Script_5_Opening_4": 13.456250,
    "Script_5_Opening_5": 10.120250,
    "Script_5_Opening_6": 5.090187,
    "Script_5_Opening_7": 20.831937,
    "Script_5_Opening_8": 2.171187,
    "Script_5_Opening_9": 1.415375,
    "Script_5_Opening_10": 1.702063,
    "Script_5_Opening_11": 5.741750,
    "Script_5_Opening_12": 4.621062,
    "Script_5_Opening_13": 5.429000,
    "Script_5_Opening_14": 4.412562,
    "Script_5_Opening_15": 6.416000,
    "Script_5_Opening_16": 28.807063,
    "Script_5_Roshan_1": 7.644312,
    "Script_5_Roshan_2": 19.268187,
    "Script_5_Roshan_3": 5.455063,
    "Script_5_Roshan_4": 23.803062,
    "Script_5_Roshan_5": 5.950250,
    "Script_5_Roshan_6": 4.855625,
    "Script_5_Roshan_7": 12.752562,
    "Script_5_Roshan_8": 5.429000,
    "Script_5_5v5_1": 9.155938,
    "Script_5_5v5_2": 5.533250,
    "Script_5_5v5_3": 9.546875,
    "Script_5_5v5_4": 3.995563,
    "Script_5_5v5_5": 3.578562,
    "Script_5_5v5_6": 18.564500,
    "Script_5_5v5_7": 20.336750,
    "Script_5_5v5_8": 8.243750,
    "Script_5_5v5_9": 11.840375,
    "Script_5_5v5_10": 10.980313,
    "Script_5_5v5_11": 8.869250,
    "Script_5_5v5_12": 6.732125,
    "Script_5_5v5_13": 4.959875,
    "Script_6_Opening_1": 3.317938,
    "Script_6_Opening_2": 3.943437,
    "Script_6_Opening_3": 4.386500,
    "Script_6_Opening_4": 14.498750,
    "Script_6_Opening_5": 15.384875,
    "Script_6_Opening_6": 10.511188,
    "Script_6_Opening_7": 10.902125,
    "Script_6_Opening_8": 16.297062,
    "Script_6_Opening_9": 4.647125,
    "Script_6_Closing_1": 19.763375,
    "Script_6_Closing_2": 6.471500,
    "Script_6_Closing_3": 2.588188,
    "Script_6_Closing_4": 8.295875,
    "Script_6_Closing_5": 9.572938,
    "Script_6_Closing_6": 8.348000,
    "Script_6_Surprise": 1.649938,
    "Script_6_anger": 29.588938,
    "Script_6_BSJ": 15.515187,
    "Script_6_Purge": 58.831063,
    "Script_6_Tsunami": 24.793437,
    "Script_6_DotaU": 23.698812,
    "Script_6_Liquipedia": 14.420563,
    "Script_6_Reddit": 22.109000,
    "Script_6_DFZ": 13.039250,
    "Script_6_Bowie": 22.864812,
    "Script_6_Awesome": 28.051250,
    "Script_6_Yodi": 25.497125,
    "Script_6_SUNSfan": 45.070062,
    "Script_6_ZQ": 16.505562,
    "Script_6_Alex": 21.416000,
    "Script_6_Dotabuff": 20.128250,
    "Script_6_Jenkins": 15.174240,
    "Script_6_DotaFire": 9.129875,
    "Script_6_Shush": 12.987125,
    "Script_6_Yoyo": 11.553688,
    "Script_6_Slacks": 26.643875,
    "Script_6_valkyrjaRuby": 10.641500,

    "General_Boo_1": 1.436735,
    "General_Boo_159": 3.448163,
    "General_Boo_166": 3.500408,
    "General_Boo_17": 2.951837,
    "General_Boo_224": 4.075102,
    "General_Boo_248": 2.612245,
    "General_Boo_261": 1.541224,
    "General_Boo_277": 2.768980,
    "General_Boo_341": 1.985306,
    "General_Boo_344": 2.063673,
    "General_Boo_35": 1.933061,
    "General_Boo_38": 1.253878,
    "General_Boo_420": 1.906939,
    "General_Boo_422": 1.880816,
    "General_Boo_48": 1.671837,
    "General_Boo_514": 1.854694,
    "General_Boo_641": 3.735510,
    "General_Boo_717": 2.403265,
    "General_Cheer_1": 1.488980,
    "General_Cheer_159": 2.377143,
    "General_Cheer_166": 5.407347,
    "General_Cheer_17": 4.310204,
    "General_Cheer_224": 2.612245,
    "General_Cheer_248": 3.944490,
    "General_Cheer_261": 1.515102,
    "General_Cheer_277": 2.403265,
    "General_Cheer_341": 2.873469,
    "General_Cheer_344": 3.134694,
    "General_Cheer_35": 1.933061,
    "General_Cheer_38": 1.201633,
    "General_Cheer_420": 1.671837,
    "General_Cheer_422": 2.768980,
    "General_Cheer_48": 2.011429,
    "General_Cheer_514": 1.410612,
    "General_Cheer_641": 3.213061,
    "General_Cheer_717": 2.429388,
    "General_Hurt_1": 1.280000,
    "General_Hurt_159": 1.044898,
    "General_Hurt_166": 5.355102,
    "General_Hurt_17": 2.690612,
    "General_Hurt_224": 10.109388,
    "General_Hurt_248": 4.963265,
    "General_Hurt_261": 0.940408,
    "General_Hurt_277": 2.507755,
    "General_Hurt_341": 1.985306,
    "General_Hurt_344": 2.063673,
    "General_Hurt_35": 1.541224,
    "General_Hurt_38": 1.201633,
    "General_Hurt_420": 2.795102,
    "General_Hurt_422": 4.127347,
    "General_Hurt_48": 1.358367,
    "General_Hurt_514": 0.992653,
    "General_Hurt_641": 2.455510,
    "General_Hurt_717": 1.619592,
    "General_Scared_1": 0.862041,
    "General_Scared_159": 1.828571,
    "General_Scared_166": 3.970612,
    "General_Scared_17": 1.906939,
    "General_Scared_224": 6.034286,
    "General_Scared_248": 2.455510,
    "General_Scared_261": 3.239184,
    "General_Scared_277": 2.481633,
    "General_Scared_341": 1.828571,
    "General_Scared_344": 1.227755,
    "General_Scared_35": 1.410612,
    "General_Scared_38": 1.097143,
    "General_Scared_420": 1.619592,
    "General_Scared_422": 2.716735,
    "General_Scared_48": 1.750204,
    "General_Scared_514": 0.966531,
    "General_Scared_641": 2.246531,
    "General_Scared_717": 1.462857,
    "Ogre_Die_1": 1.253878,
    "Ogre_Die_159": 3.030204,
    "Ogre_Die_166": 3.291429,
    "Ogre_Die_17": 2.429388,
    "Ogre_Die_224": 3.866122,
    "Ogre_Die_248": 7.026939,
    "Ogre_Die_261": 1.724082,
    "Ogre_Die_277": 4.075102,
    "Ogre_Die_341": 2.429388,
    "Ogre_Die_344": 2.115918,
    "Ogre_Die_35": 2.220408,
    "Ogre_Die_38": 1.436735,
    "Ogre_Die_420": 1.671837,
    "Ogre_Die_422": 4.466939,
    "Ogre_Die_48": 1.828571,
    "Ogre_Die_641": 2.612245,
    "Ogre_Die_717": 2.168163,
    "Ogre_Spawn_1": 1.149388,
    "Ogre_Spawn_159": 1.802449,
    "Ogre_Spawn_166": 5.355102,
    "Ogre_Spawn_17": 2.507755,
    "Ogre_Spawn_224": 3.239184,
    "Ogre_Spawn_248": 2.690612,
    "Ogre_Spawn_261": 1.515102,
    "Ogre_Spawn_277": 2.742857,
    "Ogre_Spawn_341": 2.455510,
    "Ogre_Spawn_344": 2.115918,
    "Ogre_Spawn_35": 2.089796,
    "Ogre_Spawn_38": 1.097143,
    "Ogre_Spawn_420": 2.037551,
    "Ogre_Spawn_422": 2.977959,
    "Ogre_Spawn_48": 1.854694,
    "Ogre_Spawn_514": 1.358367,
    "Ogre_Spawn_641": 3.291429,
    "Ogre_Spawn_717": 2.298776,
}

export function getRandomCommunitySound(key: LocalizationKey): string {
    const sounds = communitySounds[key]
    if (!sounds) {
        error(`Could not get community sounds for ${key}`)
    }

    return randomChoice(sounds)
}

export function getCommunitySpeaker() {
    print(getOrError(Entities.FindByName(undefined, "ent_dota_fountain_good") as CDOTA_BaseNPC).GetUnitName())
    return getOrError(Entities.FindByName(undefined, "ent_dota_fountain_good") as CDOTA_BaseNPC)
}

const communitySounds: Record<string, string[]> = {
    [LocalizationKey.General_Boo]: [
        "General_Boo_1",
        "General_Boo_159",
        "General_Boo_166",
        "General_Boo_17",
        "General_Boo_224",
        "General_Boo_248",
        "General_Boo_261",
        "General_Boo_277",
        "General_Boo_341",
        "General_Boo_344",
        "General_Boo_35",
        "General_Boo_38",
        "General_Boo_420",
        "General_Boo_422",
        "General_Boo_48",
        "General_Boo_514",
        "General_Boo_641",
        "General_Boo_717",
    ],
    [LocalizationKey.General_Cheer]: [
        "General_Cheer_1",
        "General_Cheer_159",
        "General_Cheer_166",
        "General_Cheer_17",
        "General_Cheer_224",
        "General_Cheer_248",
        "General_Cheer_261",
        "General_Cheer_277",
        "General_Cheer_341",
        "General_Cheer_344",
        "General_Cheer_35",
        "General_Cheer_38",
        "General_Cheer_420",
        "General_Cheer_422",
        "General_Cheer_48",
        "General_Cheer_514",
        "General_Cheer_641",
        "General_Cheer_717",
    ],
    [LocalizationKey.General_Hurt]: [
        "General_Hurt_1",
        "General_Hurt_159",
        "General_Hurt_166",
        "General_Hurt_17",
        "General_Hurt_224",
        "General_Hurt_248",
        "General_Hurt_261",
        "General_Hurt_277",
        "General_Hurt_341",
        "General_Hurt_344",
        "General_Hurt_35",
        "General_Hurt_38",
        "General_Hurt_420",
        "General_Hurt_422",
        "General_Hurt_48",
        "General_Hurt_514",
        "General_Hurt_641",
        "General_Hurt_717",
    ],
    [LocalizationKey.General_Scared]: [
        "General_Scared_1",
        "General_Scared_159",
        "General_Scared_166",
        "General_Scared_17",
        "General_Scared_224",
        "General_Scared_248",
        "General_Scared_261",
        "General_Scared_277",
        "General_Scared_341",
        "General_Scared_344",
        "General_Scared_35",
        "General_Scared_38",
        "General_Scared_420",
        "General_Scared_422",
        "General_Scared_48",
        "General_Scared_514",
        "General_Scared_641",
        "General_Scared_717",
    ],
    [LocalizationKey.Ogre_Die]: [
        "Ogre_Die_1",
        "Ogre_Die_159",
        "Ogre_Die_166",
        "Ogre_Die_17",
        "Ogre_Die_224",
        "Ogre_Die_248",
        "Ogre_Die_261",
        "Ogre_Die_277",
        "Ogre_Die_341",
        "Ogre_Die_344",
        "Ogre_Die_35",
        "Ogre_Die_38",
        "Ogre_Die_420",
        "Ogre_Die_422",
        "Ogre_Die_48",
        "Ogre_Die_641",
        "Ogre_Die_717",
    ],
    [LocalizationKey.Ogre_Spawn]: [
        "Ogre_Spawn_1",
        "Ogre_Spawn_159",
        "Ogre_Spawn_166",
        "Ogre_Spawn_17",
        "Ogre_Spawn_224",
        "Ogre_Spawn_248",
        "Ogre_Spawn_261",
        "Ogre_Spawn_277",
        "Ogre_Spawn_341",
        "Ogre_Spawn_344",
        "Ogre_Spawn_35",
        "Ogre_Spawn_38",
        "Ogre_Spawn_420",
        "Ogre_Spawn_422",
        "Ogre_Spawn_48",
        "Ogre_Spawn_514",
        "Ogre_Spawn_641",
        "Ogre_Spawn_717",
    ],
}
