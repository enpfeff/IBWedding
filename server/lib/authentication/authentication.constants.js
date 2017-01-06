/**
 * @module what-tools
 * @since 10/27/16
 * @author Ian Pfeffer
 */
"use strict";

module.exports = {
    // base64 encoded RSA tokens
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY || 'LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBclR5eW1sNjZIMm5jQTV2djR5L1dteUVpTGZMdTgwRTJzelY2WTAyV2grWGNIVzN4Cm5XamNSTVdWODU3anJXWTJKZjN6TDBESUlQaW8yUm1TbTF6NGxpSUZzY3JRUExtSzF2TjFXSVRVOFd0dm1XaUoKcXFIRmtQNlM1bFI2bDExbENqVFVPTDNmeGF0aGg5Q2Ixbi9kYUhqaWhyRlVwWmlycmhyV2FaQm1KNmw1VHdJaAo5MmhROW0vQk5mL3B4aVNEWVhxUHpyb0NRZDNENnkxSTdVZHNJZkh2S2djdEV4c0dzVFVVTEtsWWtjNlVBQkc2CnY2WE4xbjJ0NGh6VTNwbHQ3cUx5bWlyVnN3K1RUKy9RbEZxMDFPK21lUFV3NXZGdFJLWHpKbDNwNTBnNkVQRXUKQ0FJZGJsL1QrbGFjblhqRDU2WHh5QWovemhFbzJFamNiMFU1OVFJREFRQUJBb0lCQUdlaE82WWtyR3BHUlJyVAptWGpxRVJMVGkwSzVaRCtYNzBUYzVNMnFpRFhiUndWRDA1azZOU25lbUlrWHIxTDNKY1VzV09FWGU2QmRuNFBmClRGZ3NFWGlkK1pJVnBPUHVpaU56bCtyUDZ5SlFCbjVhanAvSURndGlmalhTcTFNSXgzeUhoYnc3dVRUaUJJSGUKUkpyWCtuYVllY25oSXFXODRsWlFMNXNPaWsyR2syaHFKdDYzaSs4ZUc1TzN6UzVjT2NwSUpJOXozdENqU214dgppOGVUM1pDczZMYklJZlpwUkVWZ0lZb09SU1JyMm51L3FoU0ZGNXVsZExoN3BiaS9Jb0Y4UXFhWFEwQ0MxWDVpCkJRNDhNN0h1VGVWYUUxd1U1MHM3emVIazNJQUkrUlc3Y1NrSjV3YldHTnlyUU9oKzVIRlBKQWJhK0xwZGR5clkKSy9seXU0RUNnWUVBMzM4b3VNMlBmU01PT2FzVlFveGVQb0hZbEIzcGM5eEtGcnYzSXZPeXVHZGhsUEVCNHFIVwp2cXVXVHE1RzgxZVNaUE5rZ3I1OFIraktSYVlheWJJQ05ZSWpIRmNiSTUwbFkydCtHZHVCdDk2WHQreTUwa0hjCmd3SEFUQytyZlc2bkNpSUxIT0JvUGhOUytUOTBhMTc2YzR4Tnk1MFJ1YlR2a3BUbTBMRmJtdWtDZ1lFQXhtNWMKSzgxclhrVHZ1KzFRVzVoRVJSZWU5ZmtjaGgwTitiZVlubGN5VFNjZ3JtaW9XZ3Vqd2Z2dFdNdUViMHJKM1ZsMApiQ052ejRkOHRiN0pqdXQzN3d5ZkoxaGpnSU1BNWZCMlpKTGNlYitwWm90WUVobU1VQXlabFlmYVViRk15WEtYCldXWWNvTENCdmc3OUR5K0FnSGZYL3lod1YzdzNJRE1rQzVNVnB5MENnWUVBeTJneHFhLzhUY21mNHNCZ1F3YjUKcHk0SjdSUWtLbnh0T2Erc3h6VEFqYkFaVWJMZkltSmt6WGZnL284Q3Arb2xwSmNYL1I1Y2doM09LZ0Y1RStSYwp1bEpNbmpod3pNTHpDajhFcjRmbDBYQlc2T0FjWnMzbVlaMHdaS1ptRDJ5cnZqOHBtZ2hyRjBRREdqRzBSUnhXCkdOK3kxZ09INUZwV1NEUVl0Z3NVOGpFQ2dZRUFsQ0N3UjdhYUR3NVJGQzNNemdOMSswbnR6VnNBTXhHZmJDbmwKRVZhd1l5M3hWS0VtQThvcW5kWE4wWHBqeTV5OTRySXptY0krWm1LUzh5MlFVMU50L1pLamdJQ1lEc2c4dEduMApSNUhtYWpCc2FmTmRkRzJEOUFIajZOODRWOEdPTzllQ0tpZHkrWFdwOU5KRmtMOTZJdXpUM2xNMndlZ2xVckU2Cm1EVmRkYVVDZ1lCSXY0VVdsZjZjcDZsV01reXJGSkROcXBtRFJ3VXJRblMvN3ZFaWR5THgwbm80Ylk3d2s5NGMKYVVwVFRjdWxVV01IRVNYSU1uODdlN081QURqK0xMdkVsTkZiRE9BV3EybEpjMkNxM3R2VkFiQS9SMTlOVWl6YwpEc2VSUlc4RmZUNDNUOXJmS1U1RCttd1FjZStXOTlCVVZROE1jeGovcUgyS1pGNnBkN2pmUVE9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQo=',
    JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY || 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFyVHl5bWw2NkgybmNBNXZ2NHkvVwpteUVpTGZMdTgwRTJzelY2WTAyV2grWGNIVzN4bldqY1JNV1Y4NTdqcldZMkpmM3pMMERJSVBpbzJSbVNtMXo0CmxpSUZzY3JRUExtSzF2TjFXSVRVOFd0dm1XaUpxcUhGa1A2UzVsUjZsMTFsQ2pUVU9MM2Z4YXRoaDlDYjFuL2QKYUhqaWhyRlVwWmlycmhyV2FaQm1KNmw1VHdJaDkyaFE5bS9CTmYvcHhpU0RZWHFQenJvQ1FkM0Q2eTFJN1VkcwpJZkh2S2djdEV4c0dzVFVVTEtsWWtjNlVBQkc2djZYTjFuMnQ0aHpVM3BsdDdxTHltaXJWc3crVFQrL1FsRnEwCjFPK21lUFV3NXZGdFJLWHpKbDNwNTBnNkVQRXVDQUlkYmwvVCtsYWNuWGpENTZYeHlBai96aEVvMkVqY2IwVTUKOVFJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==',
    JWT_ISSUER: process.env.JWT_ISSUER || 'what'
};