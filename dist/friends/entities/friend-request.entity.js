"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendRequest = exports.FriendRequestStatus = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../common/entities/base.entity");
const user_entity_1 = require("../../users/entities/user.entity");
var FriendRequestStatus;
(function (FriendRequestStatus) {
    FriendRequestStatus["PENDING"] = "pending";
    FriendRequestStatus["ACCEPTED"] = "accepted";
    FriendRequestStatus["REJECTED"] = "rejected";
})(FriendRequestStatus || (exports.FriendRequestStatus = FriendRequestStatus = {}));
let FriendRequest = class FriendRequest extends base_entity_1.BaseEntity {
};
exports.FriendRequest = FriendRequest;
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], FriendRequest.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], FriendRequest.prototype, "receiver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: FriendRequestStatus, default: FriendRequestStatus.PENDING }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: FriendRequestStatus,
        default: FriendRequestStatus.PENDING,
    }),
    __metadata("design:type", String)
], FriendRequest.prototype, "status", void 0);
exports.FriendRequest = FriendRequest = __decorate([
    (0, typeorm_1.Entity)('friend_requests')
], FriendRequest);
//# sourceMappingURL=friend-request.entity.js.map