"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePoolTx = void 0;
var decimal_js_1 = __importDefault(require("decimal.js"));
var lib_core_1 = require("@script-wiz/lib-core");
var wiz_data_1 = __importDefault(require("@script-wiz/wiz-data"));
var validatePoolTx = function (value, poolData) { return __awaiter(void 0, void 0, void 0, function () {
    var cof, method, errorMessages, output, case3outputs, case4outputs, result, pool_pair_1_liquidity, pool_pair_2_liquidity, commitmentOutputs, commitmentOutput2, commitmentOutput2AssetId, pair_1_asset_id, pair_2_asset_id, lp_asset_id, pair_1_pool_supply, pair_2_pool_supply, pair_1_coefficient, pair_2_coefficient, pool_pair_1_liquidity_downgraded, pool_pair_2_liquidity_downgraded, pool_constant, commitmentOutput3, commitmentOutput3AssetId;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        cof = value;
        method = cof.methodCall;
        errorMessages = [];
        output = {
            assetId: "",
            value: 0,
        };
        case3outputs = {
            output1: __assign({}, output),
            output2: __assign({}, output),
        };
        case4outputs = {
            output1: __assign({}, output),
            output2: __assign({}, output),
        };
        result = {
            new_pool_pair_1_liquidity: 0,
            new_pool_pair_2_liquidity: 0,
            user_supply_total: 0,
            user_supply_lp_fees: 0,
            user_supply_available: 0,
            constant_coefficient: 0,
            constant_coefficient_downgraded: 0,
            new_pair_1_pool_liquidity_apx_1: 0,
            new_pair_1_pool_liquidity_apx_2: 0,
            payout_additional_fees: 0,
            user_received_pair_1_apx: 0,
            user_received_pair_1: 0,
            new_pair_2_pool_liquidity_apx_1: 0,
            new_pair_2_pool_liquidity_apx_2: 0,
            user_received_pair_2_apx: 0,
            user_received_pair_2: 0,
            new_pool_lp_supply: 0,
            pool_lp_supply: Number(poolData.lp.value),
            new_pool_lp_liquidity: Number(poolData.lp.value),
            lp_circulation: 0,
            user_lp_supply_total: 0,
            user_lp_received: 0,
            user_lp_apx_1: 0,
            user_lp_apx_2: 0,
            user_pair_1_supply_total: 0,
            user_pair_2_supply_total: 0,
            user_pair_1_supply_total_downgraded: 0,
            user_pair_2_supply_total_downgraded: 0,
            mul_1: 0,
            mul_2: 0,
            div_1: 0,
            div_2: 0,
            pair_1_user_redeem: 0,
            pair_2_user_redeem: 0,
            pair_1_min_redeem: 0,
            pair_2_min_redeem: 0,
        };
        pool_pair_1_liquidity = Number(poolData.quote.value);
        pool_pair_2_liquidity = Number(poolData.token.value);
        commitmentOutputs = cof.outputs;
        commitmentOutput2 = commitmentOutputs[2];
        commitmentOutput2AssetId = commitmentOutput2.asset;
        pair_1_asset_id = poolData.quote.assetHash;
        pair_2_asset_id = poolData.token.assetHash;
        lp_asset_id = poolData.lp.assetHash;
        pair_1_pool_supply = Number(poolData.quote.value);
        pair_2_pool_supply = Number(poolData.token.value);
        pair_1_coefficient = poolData.pair1_coefficient.number;
        pair_2_coefficient = Math.floor(pair_2_pool_supply / pair_1_pool_supply) * pair_1_coefficient;
        pool_pair_1_liquidity_downgraded = Math.floor(pool_pair_1_liquidity / pair_1_coefficient);
        pool_pair_2_liquidity_downgraded = Math.floor(pool_pair_2_liquidity / pair_2_coefficient);
        pool_constant = Math.floor(pool_pair_1_liquidity_downgraded * pool_pair_2_liquidity_downgraded);
        if (method === "01") {
            //3-Commitment output 2 asset ID’sinin pair_1_asset_id olduğunu kontrol et.
            if (commitmentOutput2AssetId !== pair_1_asset_id)
                errorMessages.push("Commitment Output 2 AssetId must be equal to pair_1_asset_id");
            //   4-Commitment output 2 miktarına user_supply_total ismini ver.
            result.user_supply_total = new decimal_js_1.default(commitmentOutput2.value).mul(100000000).toNumber();
            if (result.user_supply_total > pool_pair_1_liquidity) {
                errorMessages.push("Supply overflow");
                output.assetId = pair_1_asset_id;
                output.value = result.user_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
            }
            //5- user_supply_total ‘ı 500’e böl ve bölüm sonucu bir tam sayı olarak ele alıp user_supply_lp_fees ismini ver.
            result.user_supply_lp_fees = Math.floor(result.user_supply_total / 500);
            //   6-user_supply_total’ dan user_supply_lp_fees’ı çıkar ve sonuca user_supply_available ismini ver.
            result.user_supply_available = Math.floor(result.user_supply_total - result.user_supply_lp_fees);
            //   7-pool_pair_1_liquidity ile user_supply_available’i topla ve sonuca constant_coefficient ismini ver.
            result.constant_coefficient = Math.floor(pool_pair_1_liquidity + result.user_supply_available);
            //   8-constant_coefficient’ı pair_1_coefficient ’a böl ve bölüm sonucunu bir tam sayı olarak ele alıp constant_coefficient_downgraded ismini ver.
            result.constant_coefficient_downgraded = Math.floor(result.constant_coefficient / pair_1_coefficient);
            // 12-pool_constant değerini constant_coefficient_downgraded ‘e böl ve sonuca new_pair_2_pool_liquidity_apx_1 ismini ver.
            result.new_pair_2_pool_liquidity_apx_1 = Math.floor(pool_constant / result.constant_coefficient_downgraded);
            // 13-new_pair_2_pool_liquidity_apx_1 değerini pair_2_coefficient ile çarp ve sonuca new_pair_2_pool_liquidity_apx_2 ismini ver.
            result.new_pair_2_pool_liquidity_apx_2 = Math.floor(result.new_pair_2_pool_liquidity_apx_1 * pair_2_coefficient);
            // 14-pool_pair_2_liquidity değerinden new_pair_2_pool_liquidity_apx_2 değerini çıkar ve sonuca user_received_pair_2_apx ismini ver.
            result.user_received_pair_2_apx = Math.floor(pool_pair_2_liquidity - result.new_pair_2_pool_liquidity_apx_2);
            // 15-pair_2_coefficient değerini 2 ile çarp ve sonuca payout_additional_fees ismini ver.
            result.payout_additional_fees = Math.floor(pair_2_coefficient * 2);
            // 16-user_received_pair_2_apx değerinden payout_additional_fees değerini çıkar ve sonuca user_received_pair_2 ismini ver.
            result.user_received_pair_2 = Math.floor(result.user_received_pair_2_apx - result.payout_additional_fees);
            if (result.user_received_pair_2 < Math.floor(10 * pair_2_coefficient)) {
                errorMessages.push("Dust payout");
                output.assetId = pair_1_asset_id;
                output.value = result.user_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
            }
            if (result.user_received_pair_2 < (((_a = lib_core_1.convertion.LE64ToNum(wiz_data_1.default.fromHex(cof.slippageTolerance))) === null || _a === void 0 ? void 0 : _a.number) || 0)) {
                errorMessages.push("Out of slippage");
                output.assetId = pair_1_asset_id;
                output.value = result.user_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
            }
            if (errorMessages.length === 0) {
                //SUCCESS
                // İlgili slot için 1 tane settlement output oluştur. Bu outputun asset ID ‘sini pair_2_asset id si olarak ayarla, miktarını da user_received_pair_2 olarak ayarla.
                output = {
                    assetId: pair_2_asset_id,
                    value: result.user_received_pair_2,
                };
                // pool_pair_1_liquidity değerine user_supply_total değerine ekle ve sonuca new_pool_pair_1_liquidity ismini ver. Bu değeri havuzun güncel pair 1 liquidity miktarı olarak ata.
                result.new_pool_pair_1_liquidity = Math.floor(pool_pair_1_liquidity + result.user_supply_total);
                // pool_pair_2_liquidity değerinden user_received_pair_2 değerini çıkar ve sonuca new_pool_pair_2_liquidity ismini ver. Bu değeri havuzun güncel pair 2 liquidity miktarı olarak ata.
                result.new_pool_pair_2_liquidity = Math.floor(pool_pair_2_liquidity - result.user_received_pair_2);
            }
        }
        else if (method === "02") {
            // 3- Commitment output 2 asset ID’sinin pair_2_asset_id olduğunu kontrol et.
            if (commitmentOutput2AssetId !== pair_2_asset_id)
                errorMessages.push("Commitment Output 2 AssetId must be equal to pair_1_asset_id");
            // 4- Commitment output 2 miktarına user_supply_total ismini ver.
            result.user_supply_total = new decimal_js_1.default(commitmentOutput2.value).mul(100000000).toNumber();
            // 5- user_supply_total ‘ı 500’e böl ve bölüm sonucu bir tam sayı olarak ele alıp user_supply_lp_fees ismini ver.
            result.user_supply_lp_fees = Math.floor(result.user_supply_total / 500);
            if (result.user_supply_total > pool_pair_2_liquidity) {
                errorMessages.push("Supply overflow");
                output.assetId = pair_2_asset_id;
                output.value = result.user_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
            }
            // 6- user_supply_total ’dan user_supply_lp_fees ’ı çıkar ve sonuca user_supply_available ismini ver.
            result.user_supply_available = Math.floor(result.user_supply_total - result.user_supply_lp_fees);
            // 7-pool_pair_2_liquidity ile user_supply_available ’i topla ve sonuca constant_coefficient ismini ver.
            result.constant_coefficient = Math.floor(pool_pair_2_liquidity + result.user_supply_available);
            // 8- constant_coefficient ’ı pair_2_coefficient ’a böl ve bölüm sonucunu bir tam sayı olarak ele alıp constant_coefficient_downgraded ismini ver.
            result.constant_coefficient_downgraded = Math.floor(result.constant_coefficient / pair_2_coefficient);
            // 12- pool_constant değerini constant_coefficient_downgraded ‘e böl ve sonuca new_pair_1_pool_liquidity_apx_1 ismini ver
            result.new_pair_1_pool_liquidity_apx_1 = Math.floor(pool_constant / result.constant_coefficient_downgraded);
            // 13- new_pair_1_pool_liquidity_apx_1 değerini pair_1_coefficient ile çarp ve sonuca new_pair_1_pool_liquidity_apx_2 ismini ver.
            result.new_pair_1_pool_liquidity_apx_2 = Math.floor(result.new_pair_1_pool_liquidity_apx_1 * pair_1_coefficient);
            // 14- pool_pair_1_liquidity değerinden new_pair_1_pool_liquidity_apx_2 değerini çıkar ve sonuca user_received_pair_1_apx ismini ver.
            result.user_received_pair_1_apx = Math.floor(pool_pair_1_liquidity - result.new_pair_1_pool_liquidity_apx_2);
            // 15- pair_1_coefficient değerini 2 ile çarp ve sonuca payout_additional_fees ismini ver.
            result.payout_additional_fees = Math.floor(pair_1_coefficient * 2);
            // 16- user_received_pair_1_apx değerinden payout_additional_fees değerini çıkar ve sonuca user_received_pair_1 ismini ver.
            result.user_received_pair_1 = Math.floor(result.user_received_pair_1_apx - result.payout_additional_fees);
            if (result.user_received_pair_1 < Math.floor(10 * pair_1_coefficient)) {
                errorMessages.push("Dust payout");
                output.assetId = pair_2_asset_id;
                output.value = result.user_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
            }
            if (result.user_received_pair_1 < (((_b = lib_core_1.convertion.LE64ToNum(wiz_data_1.default.fromHex(cof.slippageTolerance))) === null || _b === void 0 ? void 0 : _b.number) || 0)) {
                errorMessages.push("Out of slippage");
                output.assetId = pair_2_asset_id;
                output.value = result.user_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
            }
            if (errorMessages.length === 0) {
                //SUCCESS
                // İlgili slot için 1 tane settlement output oluştur. Bu outputun asset ID ‘sini pair_1_asset id si olarak ayarla, miktarını da user_received_pair_1 olarak ayarla.
                output = {
                    assetId: pair_1_asset_id,
                    value: result.user_received_pair_1,
                };
                // pool_pair_2_liquidity değerine user_supply_total değerine ekle ve sonuca new_pool_pair_2_liquidity ismini ver. Bu değeri havuzun güncel pair 2 liquidity miktarı olarak ata.
                result.new_pool_pair_2_liquidity = Math.floor(pool_pair_2_liquidity + result.user_supply_total);
                // pool_pair_1_liquidity değerinden user_received_pair_1 değerini çıkar ve sonuca new_pool_pair_1_liquidity ismini ver. Bu değeri havuzun güncel pair 1 liquidity miktarı olarak ata.
                result.new_pool_pair_1_liquidity = Math.floor(pool_pair_1_liquidity - result.user_received_pair_1);
            }
        }
        else if (method === "03") {
            commitmentOutput3 = commitmentOutputs[3];
            commitmentOutput3AssetId = commitmentOutput3.asset;
            // 4- 2000000000 değerinden pool_lp_supply değerini çıkar ve sonuca lp_circulation ismini ver.
            result.lp_circulation = Math.floor(2000000000 - result.pool_lp_supply);
            // 5- Commitment output 2 asset ID’sinin pair_1_asset_id olduğunu kontrol et.
            if (commitmentOutput2AssetId !== pair_1_asset_id)
                errorMessages.push("Commitment Output 2 AssetId must be equal to pair_1_asset_id");
            // 6- Commitment output 3 asset ID’sinin pair_2_asset_id olduğunu kontrol et.
            if (commitmentOutput3AssetId !== pair_2_asset_id)
                errorMessages.push("Commitment Output 3 AssetId must be equal to pair_2_asset_id");
            // 7-Commitment output 2 miktarına user_pair_1_supply_total ismini ver.
            result.user_pair_1_supply_total = new decimal_js_1.default(commitmentOutput2.value).mul(100000000).toNumber();
            // 8- Commitment output 3 miktarına user_pair_2_supply_total ismini ver.
            result.user_pair_2_supply_total = new decimal_js_1.default(commitmentOutput3.value).mul(100000000).toNumber();
            // 9-user_pair_1_supply_total değerini pair_1_coefficient ’a böl ve sonuca user_pair_1_supply_total_downgraded ismini ver
            result.user_pair_1_supply_total_downgraded = Math.floor(result.user_pair_1_supply_total / pair_1_coefficient);
            // 10-user_pair_1_supply_total_downgraded ile pool_lp_supply değerini çarp ve sonuca mul_1 ismini ver.
            //fix:user_pair_1_supply_total_downgraded ile lp_circulation değerini çarp ve sonuca mul_1 ismini ver.
            result.mul_1 = Math.floor(result.user_pair_1_supply_total_downgraded * result.lp_circulation);
            // 12-mul_1 değerini pool_pair_1_liquidity_downgraded değerine böl ve sonuca user_lp_apx_1 ismini ver
            result.user_lp_apx_1 = Math.floor(result.mul_1 / pool_pair_1_liquidity_downgraded);
            // 13-user_pair_2_supply_total değerini pair_2_coefficient ’a böl ve sonuca user_pair_2_supply_total_downgraded ismini ver.
            result.user_pair_2_supply_total_downgraded = Math.floor(result.user_pair_2_supply_total / pair_2_coefficient);
            // 14-user_pair_2_supply_total_downgraded ile lp_circulation değerini çarp ve sonuca mul_2 ismini ver.
            result.mul_2 = Math.floor(result.user_pair_2_supply_total_downgraded * result.lp_circulation);
            // 16-mul_2 değerini pool_pair_2_liquidity_downgraded değerine böl ve sonuca user_lp_apx_2 ismini ver.
            result.user_lp_apx_2 = Math.floor(result.mul_2 / pool_pair_2_liquidity_downgraded);
            // 17-user_lp_apx_1 değeri ile user_lp_apx_2 değerini kıyasla, ikisinden hangisi daha küçük ise bu değere user_lp_received ismini ver.
            result.user_lp_received = result.user_lp_apx_1 < result.user_lp_apx_2 ? result.user_lp_apx_1 : result.user_lp_apx_2;
            if (result.user_lp_received < 1) {
                errorMessages.push("Dust LP payout");
                case3outputs.output1.assetId = pair_1_asset_id;
                case3outputs.output1.value = result.user_pair_1_supply_total;
                case3outputs.output2.assetId = pair_2_asset_id;
                case3outputs.output2.value = result.user_pair_2_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
            }
            if (result.user_lp_received < (((_c = lib_core_1.convertion.LE64ToNum(wiz_data_1.default.fromHex(cof.slippageTolerance))) === null || _c === void 0 ? void 0 : _c.number) || 0)) {
                errorMessages.push("Out of slippage");
                // İlgili slot için 2 tane settlement output oluştur. Birinci outputun asset ID ‘sini pair_1_asset id olarak, ikinci outputun asset ID’sini ise ise pair_1_asset ID olarak ayarla.
                // Birinci outpunun miktarını user_pair_1_supply_total olarak ayarla.
                // İkinci outputun miktarını user_pair_2_supply_total olarak ayarla
                // new_pool_pair_1_liquidity = pool_pair_1_liquidity.
                // new_pool_pair_2_liquidity = pool_pair_2_liquidity.
                case3outputs.output1.assetId = pair_1_asset_id;
                case3outputs.output1.value = result.user_pair_1_supply_total;
                case3outputs.output2.assetId = pair_2_asset_id;
                case3outputs.output2.value = result.user_pair_2_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
            }
            if (errorMessages.length === 0) {
                // Success logic’inde:
                // İlgili slot için 1 tane settlement output oluştur. Bu outputun asset ID ‘sini LP asset id si olarak ayarla, miktarını da user_lp_received olarak ayarla.
                // pool_pair_1_liquidity değerine user_pair_1_supply_total değerine ekle ve sonuca new_pool_pair_1_liquidity ismini ver. Bu değeri havuzun güncel pair 1 liquidity miktarı olarak ata.
                // pool_pair_2_liquidity değerine user_pair_2_supply_total değerini ekle ve sonuca new_pool_pair_2_liquidity ismini ver. Bu değeri havuzun güncel pair 2 liquidity miktarı olarak ata.
                output.assetId = poolData.lp.assetHash;
                output.value = result.user_lp_received;
                result.new_pool_pair_1_liquidity = Math.floor(pool_pair_1_liquidity + result.user_pair_1_supply_total);
                result.new_pool_pair_2_liquidity = Math.floor(pool_pair_2_liquidity + result.user_pair_2_supply_total);
                result.new_pool_lp_liquidity = Math.floor(result.pool_lp_supply - result.user_lp_received);
            }
        }
        else if (method === "04") {
            // 2000000000 değerinden pool_lp_supply değerini çıkar ve sonuca lp_circulation ismini ver.
            result.lp_circulation = Math.floor(2000000000 - result.pool_lp_supply);
            // Commitment output 2 asset ID’sinin lp_asset_id olduğunu kontrol et.
            if (commitmentOutput2AssetId !== lp_asset_id)
                errorMessages.push("Commitment Output 2 AssetId must be equal to Lp Asset Id");
            // Commitment output 2 miktarına user_lp_supply_total ismini ver.
            result.user_lp_supply_total = new decimal_js_1.default(commitmentOutput2.value).mul(100000000).toNumber();
            // user_lp_supply_total ile pool_pair_1_liquidity_downgraded değerini çarp ve bu değeri mul_1 ismini ver.
            result.mul_1 = Math.floor(result.user_lp_supply_total * pool_pair_1_liquidity_downgraded);
            // mul_1 değerini lp_circulation değerine böl ve sonuca div_1 ismini ver.
            result.div_1 = Math.floor(result.mul_1 / result.lp_circulation);
            // div_1 değeri ile pair_1_coefficient değerini çarp ve sonuca pair_1_user_redeem ismini ver.
            result.pair_1_user_redeem = Math.floor(result.div_1 * pair_1_coefficient);
            // user_lp_supply_total ile pool_pair_2_liquidity_downgraded değerini çarp ve bu değeri mul_2 ismini ver.
            result.mul_2 = Math.floor(result.user_lp_supply_total * pool_pair_2_liquidity_downgraded);
            // mul_2 değerini lp_circulation değerine böl ve sonuca div_2 ismini ver.
            result.div_2 = Math.floor(result.mul_2 / result.lp_circulation);
            // div_2 değeri ile pair_2_coefficient değerini çarp ve sonuca pair_2_user_redeem ismini ver.
            result.pair_2_user_redeem = Math.floor(result.div_2 * pair_2_coefficient);
            // 22 ile pair_1_coefficient değerini çarp ve bu değere pair_1_min_redeem ismini ver.
            result.pair_1_min_redeem = Math.floor(pair_1_coefficient * 10);
            // 22 ile pair_2_coefficient değerini çarp ve bu değere pair_2_min_redeem ismini ver.
            result.pair_2_min_redeem = Math.floor(pair_2_coefficient * 10);
            // a. pair_1_user_redeem değeri pair_1_min_redeem değerinden küçük ise veya pair_2_user_redeem değeri pair_2_min_redeem değerinden küçük ise “revert” logic’ini çalıştır. Bu erroru “Dust LP payout” olarak etiketle.
            if (result.pair_1_user_redeem < result.pair_1_min_redeem || result.pair_2_user_redeem < result.pair_2_min_redeem) {
                errorMessages.push("Dust LP payout");
                // İlgili slot için 1 tane settlement output oluştur. Bu outputun asset ID ‘sini lp_asset id olarak ayarla ve miktarını da user_lp_supply_total olarak ayarla.
                // new_pool_pair_1_liquidity = pool_pair_1_liquidity (değişmedi).
                // new_pool_pair_2_liquidity = pool_pair_2_liquidity (değişmedi).
                // new_pool_lp_supply = pool_lp_supply (değişmedi).
                output.assetId = lp_asset_id;
                output.value = result.user_lp_supply_total;
                result.new_pool_pair_1_liquidity = pool_pair_1_liquidity;
                result.new_pool_pair_2_liquidity = pool_pair_2_liquidity;
                result.new_pool_lp_liquidity = result.pool_lp_supply;
                // -------------------TODO-------------------
                // burası mastera geçince new_pool_lp_supply olarak geğiştirilecek result.new_pool_lp_liquidity = result.pool_lp_supply;
            }
            if (errorMessages.length === 0) {
                //       Success logic’inde;
                // İlgili slot için 2 tane settlement output oluştur.
                // Birinci outputun asset ID sini pair_1_asset_id olarak ayarla, miktarını da pair_1_user_redeem olarak ayarla.
                // İkinci outputun asset ID sini pair_2_asset_id olarak ayarla, miktarını da pair_2_user_redeem olarak ayarla.
                // pool_pair_1_liquidity değerinden pair_1_user_redeem değerini çıkar ve sonuca new_pool_pair_1_liquidity ismini ver. Bu değeri havuzun güncel pair 1 liquidity miktarı olarak ata.
                // pool_pair_2_liquidity değerinden pair_2_user_redeem değerini çıkar ve sonuca new_pool_pair_2_liquidity ismini ver. Bu değeri havuzun güncel pair 2 liquidity miktarı olarak ata.
                // pool_lp_supply değerine user_lp_supply_total değerini ekle ve sonuca new_pool_lp_supply ismini ver. Bu değeri havuzun güncel pair lp supply değeri olarak ata.
                case4outputs.output1.assetId = pair_1_asset_id;
                case4outputs.output1.value = result.pair_1_user_redeem;
                case4outputs.output2.assetId = pair_2_asset_id;
                case4outputs.output2.value = result.pair_2_user_redeem;
                result.new_pool_pair_1_liquidity = Math.floor(pool_pair_1_liquidity - result.pair_1_user_redeem);
                result.new_pool_pair_2_liquidity = Math.floor(pool_pair_2_liquidity - result.pair_2_user_redeem);
                result.new_pool_lp_liquidity = Math.floor(result.pool_lp_supply + result.user_lp_supply_total);
            }
        }
        return [2 /*return*/, {
                method: method,
                pool_pair_1_liquidity: pool_pair_1_liquidity,
                pool_pair_2_liquidity: pool_pair_2_liquidity,
                commitmentOutput2AssetId: commitmentOutput2AssetId,
                pair_1_asset_id: pair_1_asset_id,
                pair_2_asset_id: pair_2_asset_id,
                pair_1_pool_supply: pair_1_pool_supply,
                pair_2_pool_supply: pair_2_pool_supply,
                pair_1_coefficient: pair_1_coefficient,
                pair_2_coefficient: pair_2_coefficient,
                pool_pair_1_liquidity_downgraded: pool_pair_1_liquidity_downgraded,
                pool_pair_2_liquidity_downgraded: pool_pair_2_liquidity_downgraded,
                pool_constant: pool_constant,
                result: result,
                lp_asset_id: lp_asset_id,
                leafCount: poolData.maxLeaf,
                poolData: poolData,
                output: output,
                case3outputs: case3outputs,
                case4outputs: case4outputs,
                errorMessages: errorMessages,
            }];
    });
}); };
exports.validatePoolTx = validatePoolTx;
//# sourceMappingURL=validatePoolTx.js.map