"use strict";

import "./libs/dayjs.js";

//CSS
import "./style/global.scss";
import "./style/header.scss";
import "./style/section-agend.scss";
import "./style/section-cards.scss";
import "./style/form.scss";

//JS
import "./modules/form/submit.js";
import "./modules/form/format-time.js";
import "./modules/form/overlay.js";
import "../src/services/api-config.js";
import "../src/services/schedule-new.js";
import "../src/services/schedule-fetch-by-day.js";
import "../src/modules/schedules/load.js";
import "../src/modules/schedules/showSchedules.js";
import "../src/services/delete.js";
import "../src/services/deleteSchedule-by-id.js";
