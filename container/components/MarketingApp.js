import React from "react";
import { renderMarketing } from "marketing/MarketingApp";

const Marketing = () => <div ref={(element) => renderMarketing(element)} />;

export default Marketing;
