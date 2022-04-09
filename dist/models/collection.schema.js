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
exports.CollectionSchema = exports.Collection = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const seller_schema_1 = require("./seller.schema");
let Collection = class Collection {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Collection.prototype, "collectionName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Collection.prototype, "collectionDescription", void 0);
__decorate([
    mongoose_1.Prop({ default: 'active' }),
    __metadata("design:type", String)
], Collection.prototype, "collectionStatus", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller' }),
    __metadata("design:type", seller_schema_1.Seller)
], Collection.prototype, "collectionOwner", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Collection.prototype, "collectionImage", void 0);
__decorate([
    mongoose_1.Prop({ type: Number, default: 0 }),
    __metadata("design:type", String)
], Collection.prototype, "createdAt", void 0);
Collection = __decorate([
    mongoose_1.Schema()
], Collection);
exports.Collection = Collection;
exports.CollectionSchema = mongoose_1.SchemaFactory.createForClass(Collection);
//# sourceMappingURL=collection.schema.js.map