import React, { Component } from "react";
import {
Breadcrumb,
Row,
Col,
Button
} from "tinper-bee";
import Alert from 'bee-alert';
import { Link } from "react-router";
import axios from "axios";
import "./index.less";
import "../../../../utils/utils.js";

export default function Agreement() {
    return (
        <div className="agreement-container">
        <Row>
            <Col md={10} xs={10} sm={10} >
                <div className="title">
                    <p>广发基金企业版网上交易服务协议</p>               
                </div>
            </Col>
            <Col md={2} xs={2} sm={2} >
                <div className="logo"></div>
            </Col>         
        </Row>
            <div className="line"></div>
			<div className="content-container">
		       <p>甲方：企业/机构投资人</p>
			　　<p>乙方：广发基金管理有限公司</p>
			　　<p>甲、乙双方依据法律法规的规定，本着公开、公平、自愿和诚实信用的原则，就甲方委托乙方提供网上交易服务达成如下协议：</p>
			　　<p>第一条 风险提示</p>
			　　<p>1、甲方在申请使用乙方网上交易系统时，已完全了解以下内容：</p>
			　　<p>（1）证券投资基金（以下简称“基金”）是一种长期投资工具，其主要功能是分散投资，降低投资单一证券所带来的个别风险。基金不同于银行储蓄和债券等能够提供固定收益预期的金融工具，投资人购买基金，既可能按其持有份额分享基金投资所产生的收益，也可能承担基金投资所带来的损失。</p>
			　　<p>（2）基金在投资运作过程中可能面临各种风险，既包括市场风险，也包括基金自身的管理风险、技术风险和合规风险等。巨额赎回风险是开放式基金所特有的一种风险，即当单个交易日基金的净赎回申请超过基金总份额的百分之十时，投资人将可能无法及时赎回持有的全部基金份额。</p>
			　　<p>（3）基金分为股票基金、混合基金、债券基金、货币市场基金等不同类型，投资人投资不同类型的基金将获得不同的收益预期，也将承担不同程度的风险。一般来说，基金的收益预期越高，投资人承担的风险也越大。</p>
			　　<p>（4）投资人应当认真阅读《基金合同》、《招募说明书》等基金法律文件，了解基金的风险收益特征，并根据自身的投资目的、投资期限、投资经验、资产状况等判断基金是否和投资人的风险承受能力相适应。</p>
			　　<p>（6）投资人应当充分理解企业版系统基础账户（“钱袋子账户”）对应着的是中国证监会批准的货币市场基金产品，该产品不是储蓄，也不保证保本或承诺最低收益。该产品的七日年化收益率不是承诺收益，会随着市场情况的波动而变化。基金管理人有权对系统基础账户的名称、功能、系统接口、对应货币基金产品等进行升级和完善。</p>
			　　<p>（7）投资者应当充分认识基金管理人提供的T+0等服务是一种增值服务，不是必须履行的约定。基金管理人可以根据市场流动性情况、基础账户规模变化、自身资金情况对此进行临时变更和调整，变更时将通过网站、手机平台通知投资人。</p>
			　　<p>（8）基金管理人承诺以诚实信用、勤勉尽责的原则管理和运用基金资产，但不保证本基金一定盈利，也不保证最低收益。基金的过往业绩及其净值高低并不预示其未来业绩表现。基金管理人提醒投资人基金投资的“买者自负”原则，在做出投资决策后，基金运营状况与基金净值变化引致的投资风险，由投资人自行负担。</p>
			　　<p>2、甲方自愿申请使用乙方网上交易系统，并被认为已经完全了解网上交易的风险，并能够承担由此可能带来的损失。</p>
			　　<p>3、乙方已最大限度地采取了有效措施保护甲方资料和交易活动的安全。尽管如此，本着对客户负责的态度，乙方在此郑重提示甲方进行网上交易仍然存在风险，该风险包括但不限于：</p>
			　　<p>（1）互联网是全球公共网络，并不受任何一个机构所控制。数据在互联网上传输的途径不是完全确定的，可能会受到非法干扰或侵入。</p>
			　　<p>（2）在互联网上传输的数据有可能被某些未经许可的个人、团体或机构通过某种渠道获得或篡改。</p>
			　　<p>（3）互联网上的数据传输可能因通信繁忙出现延迟，或因其他原因出现中断、停顿或数据不完全、数据错误等情况，从而使交易出现延迟、中断或停顿。</p>
			　　<p>（4）互联网上发布的各种信息（包括但不限于分析、预测性的参考资料）可能出现错误并误导包括甲方在内的投资人。</p>
			　　<p>（5）甲方的网上交易身份可能会被泄露或仿冒。</p>
			　　<p>（6）甲方使用的计算机可能因存在性能缺陷、质量问题、计算机病毒、硬件故障及其他原因，而对甲方造成的交易时间或交易数据造成影响，给甲方造成损失。</p>
			　　<p>（7）由于甲方的计算机应用操作能力或互联网知识的缺乏，可能对甲方的交易时间或交易数据造成影响，因此给甲方造成损失。</p>
			　　<p>（8）因甲方自身的疏忽造成账号或密码泄露，可能会给甲方造成损失。</p>
			　　<p>（9）由于不可抗力导致的其它风险。</p>
			　　<p>第二条 释义</p>
			　　<p>除非本协议另有规定，下列词语具有如下含义：</p>
			　　<p>1、网上交易服务：是指乙方按照本协议的规定，为投资人（甲方）提供的，通过网上交易系统下达交易指令、进行信息查询等方面的服务。</p>
			　　<p>2、投资人（甲方）：指依照乙方所管理开放式基金的基金合同和基金招募说明书的规定，通过乙方提供的网上交易系统进行网上交易的投资者。本协议目前仅指企业/机构投资者。</p>
			　　<p>3、基金账户：指基金注册登记人为投资人开立的记录其持有乙方所管理的开放式基金的基金份额、份额变动情况及基本资料的账户。</p>
			　　<p>4、交易账户：是指甲方开立的记录其通过网上交易系统买卖乙方所管理开放式基金的基金份额及份额变动情况的账户。</p>
			　　<p>5、基金认购：是指开放式基金设立募集期内，甲方申请购买基金份额的行为。</p>
			　　<p>6、基金申购：是指开放式基金合同生效后，甲方申请购买基金份额的行为。</p>
			　　<p>7、基金赎回：是指开放式基金成立之后的存续期内，持有基金份额的投资人要求乙方购回基金份额的行为。</p>
			　　<p>8、基金转托管：是指甲方将其持有的基金份额从一个销售机构的交易账户转入另一个销售机构的交易账户的行为。</p>
			　　<p>9、基金转换：是指基金存续期间，甲方向乙方提出申请将其原持有基金（下称“转出基金”）的基金份额转换为乙方管理的其他基金（下称“转入基金”）的基金份额的行为。</p>
			　　<p>10、基金份额净值：是指计算日基金资产净值除以计算日基金份额总数后的价值。</p>
			　　<p>11、T日：是指乙方确认的甲方提交有效申请的工作日。</p>
			　　<p>12、T＋n日：是指T日后第n个工作日（不包含T日）。</p>
			　　<p>13、工作日：是指上海证券交易所或深圳证券交易所的正常交易日。</p>
			　　<p>14、开放日：是指为甲方办理基金业务的工作日。</p>
			　　<p>15、网上交易系统：是指广发基金企业版网站及交易系统。</p>
			　　<p>16、业务规则：是指《广发基金企业版网上交易服务协议》。</p>
			　　<p>第三条 服务内容</p>
			　　<p>协议所述网上交易服务的内容包括账户开立、账户资料变更、认购、申购、赎回、转换、转托管、交易撤销、分红方式变更、交易密码修改、相关信息查询及其他业务。 为了改善用户体验，保障服务的安全性以及产品功能的一致性，乙方有权在必要时对网上交易服务的软件系统进行更新升级，包括但不限于：网页、图片、文字、音频、短信服务接口、软件界面、操作系统、数据库以及系统基础账户对应的经中国证监会批准的货币类基金产品等。</p>
			　　<p>第四条 甲方承诺</p>
			　　<p>1、甲方已经了解并完全理解使用网上交易可能遭受的风险，并自愿承担该种风险及其可能导致的损失。</p>
			　　<p>2、甲方在签订本协议之前，已经详细阅读并完全认可了本协议中包括乙方免责条款在内的所有条款，并已准确理解其含义。</p>
			　　<p>3、甲方确认已详细阅读并理解、接受乙方所管理的开放式基金的基金合同、基金招募说明书、业务规则的所有内容及规定。甲方自愿通过乙方的网上交易系统办理基金业务，并承诺上述业务视同甲方亲临乙方柜台办理。</p>
			　　<p>4、甲方保证用于投资乙方所管理基金的资金来源合法，否则由此引起的一切责任由甲方承担。</p>
			　　<p>5、甲方保证所输入的信息真实、准确和有效并对此承担责任，如有变化，甲方应及时变更相关资料。因甲方未能及时变更有关资料所可能导致的损失由甲方承担。</p>
			　　<p>6、甲方承诺独立使用本合同规定的网上交易服务，不与他人共享；甲方不利用该系统从事基金代理买卖业务并从中收取任何费用。</p>
			　　<p>7、甲方确保其用于网上交易的设备的安全性和可靠性。对于因甲方的设备故障、通讯故障等原因造成的经济损失，乙方不承担任何责任。</p>
			　　<p>8、甲方应自行承担其交易密码及银行卡支付密码的保密义务。甲方应自行承担其交易密码的保密义务。凡是使用甲方密码所进行的一切委托，均被视为甲方亲自办理的有效委托。甲方由于自己疏忽或其他原因而致使密码失密造成的损失由甲方自己承担，乙方对此不承担任何责任。</p>
			　　<p>9、甲方在发现或有理由认为存在未被授权的人正在或可能使用其账号、密码时，应立即与乙方联系，甲方承诺采取相应的保护、防范措施。</p>
			　　<p>10、甲方承诺不以任何方式攻击乙方网络或破坏乙方系统，否则承担由此给乙方或任何第三方造成的损失。</p>
			　　<p>11、甲方对其各项委托活动的结果承担全部责任，承诺偿付任何因其违约而使乙方遭受的损失。</p>
			　　<p>12、甲方不得将本协议项下的权利或义务的部分或全部转让给任何第三方。</p>
			　　<p>13、甲方不使用信用卡及任何种类的银行卡进行透支买卖乙方所设立、管理的基金，否则引起的纠纷与乙方无关。</p>
			　　<p>14、甲方承诺乙方保留或所得到的电子交易数据为甲方交易行为唯一有效证据，并承认其等同于书面签署之法律文件之效力。</p>
			　　<p>15、甲方保证资金的来源及用途合法，了解相关权利、义务，愿意承担相应的投资风险。</p>
			　　<p>第五条 乙方承诺</p>
			　　<p>1、乙方遵守法律法规，并愿意受本协议的所有条款的约束。</p>
			　　<p>2、乙方提供的网上交易系统的系统安全、数据备份和故障恢复措施符合监管机关的规定。</p>
			　　<p>3、对甲方委托的网上交易，乙方对相关电子数据进行保留并作为甲方交易行为的证明。乙方对甲方的账户资料、委托事项负有保密义务，未经甲方许可，乙方不得透露甲方在乙方登记的任何资料。但乙方按照有关法律、法规的规定或有关司法机关、行政管理机关的要求提供甲方的有关资料不在此限。</p>
			　　<p>4、乙方在本协议生效当日，为甲方开通协议约定的服务。</p>
			　　<p>第六条 特别提示</p>
			　　<p>1、网上交易协议的签署提示：</p>
			　　<p>甲方通过乙方网上交易系统进行网上交易业务前必须与乙方签订本协议。代表甲方已仔细阅读并理解本协议，完全接受其法律约束力，效力视同为甲、乙双方签字盖章。</p>
			　　<p>2、支付业务提示：</p>
			　　<p>甲方须依据业务规则及相关业务指南办理资金支付事宜。</p>
			　　<p>3、业务确认提示：</p>
			　　<p>甲方提交的开户申请分为基金账户开户和交易账户开户。交易账户和基金账户开户于T+1日经注册登记部门确认后方可确认成功与否。甲方T+2日可以通过网上系统查询确认结果。</p>
			　　<p>甲方的交易申请与开户为同一天或次日提交的，交易申请是否成功取决于基金账户开户是否成功。当基金账户开户失败时，交易申请也将失败。</p>
			　　<p>4、设备提示：</p>
			　　<p>甲方应具备网上交易所必需的设备。</p>
			　　<p>5、委托提示：</p>
			　　<p>甲方网上提交的委托，以乙方的系统记录为准。</p>
			　　<p>7、委托受理时间提示：</p>
			　　<p>当日委托申请的受理截止时间为15：00。甲方委托申请的时间超出上述截止时间，则乙方视甲方的委托申请为下一个交易日的申请。申请时间以乙方系统自动记载时间为准。</p>
			　　<p>第七条 免责条款</p>
			　　<p>因下列情形导致甲方损失的，乙方不承担责任：</p>
			　　<p>1、因地震、火灾、台风及其他各种不可抗力引起停电、网络系统故障、电脑故障。</p>
			　　<p>2、因电信部门的通讯线路故障、通讯技术缺陷、电脑黑客或计算机病毒等问题造成委托系统不能正常运转。</p>
			　　<p>3、法律、政策重大变化，或乙方不可预测、不可控制的因素导致的突发事件导致甲方损失的。</p>
			　　<p>4、因通讯、网络中断、堵塞等情况致使无法及时通过约定的委托手段下达申请委托时导致甲方损失的。</p>
			　　<p>5、因甲方设备或通讯故障或设备未能处于正常工作状态致使乙方未能按时或及时收到甲方申请信息，或者乙方收到的甲方申请信息不完整而导致甲方损失的。</p>
			　　<p>6、因甲方对设备的错误操作和对有关信息的错误理解导致甲方损失的。</p>
			　　<p>7、因甲方的故意或疏忽导致交易密码或银行卡支付密码泄露或遗失，由此导致甲方损失的。</p>
			　　<p>8、法律规定和本协议约定的其他乙方免责事项。</p>
			　　<p>第八条 协议生效及变更</p>
			　　<p>1、在不损害甲方利益的前提下，乙方保留修改或增补本协议内容的权利。本协议内容包括协议正文及所有广发基金已经发布的或将来可能发布的钱袋子服务的使用规则，所有规则为本协议不可分割的一部分，与协议正文具有相同法律效力。本协议的修改时间和修改文本将公告于乙方的网站及营业场所，或以其他乙方认为可行的方式通知甲方。若甲方在本协议内容修改公布后仍继续使用本服务，则表示用甲方已充分阅读、理解、同意并接受修改或变更后的协议内容，也将遵循修改或变更后的协议内容使用本服务。</p>
			　　<p>2、本协议签署后，若有关法律、法规、规章以及基金合同、基金招募说明书、业务规则等发生变更，本协议之不适应的内容和条款自行失效，并按照变更后的相关法律文件的规定执行。</p>
			　　<p>3、本协议在甲、乙双方签署后立即生效，甲方在网上开户申请时，点击“我同意”按钮，即视为对本协议的签署。</p>
			　　<p>4、本协议在下述情况之一发生时终止：</p>
			　　<p>（1）双方签订书面协议同意终止。</p>
			　　<p>（2）甲方破产或不再具备相应的民事行为能力。</p>
			　　<p>（3）甲方撤销本协议项下设立的交易账户。</p>
			　　<p>（4）乙方不作为甲方认购、申购基金或甲方所持有基金的管理人。</p>
			　　<p>（5）因不可抗力使本协议无法继续履行。</p>
			　　<p>（6）一方违约，另一方书面通知对方提出解除本协议。</p>
			　　<p>（7）甲方通过柜台或网上方式取消网上交易方式。</p>
			　　<p>（8） 法律法规、基金合同约定的其它情形。</p>
			　　<p>第九条 争议的解决</p>
			　　<p>甲、乙双方如有争议，应尽可能通过协商解决；协商不成的，任何一方均有权向广州仲裁委员会申请仲裁，仲裁地点为广州。仲裁裁决是终局的，对双方均有法律约束力。</p>
			</div>
        </div>
    );
}
