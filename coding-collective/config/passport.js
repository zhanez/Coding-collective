const bcrypt = require("bcryptjs");
const User = require("../models/user");
const passport = require("passport-local");
const LocalStrategy = require("passport-local").Strategy;