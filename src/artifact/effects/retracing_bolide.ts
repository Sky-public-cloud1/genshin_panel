import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.shield += 0.35;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.countRetracingBolide) {
        attribute.aBonus += 0.4;
        attribute.bBonus += 0.4;
    }
}

export default [null, apply2, null, apply4, null];