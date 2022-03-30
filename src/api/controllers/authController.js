// Dependencies.
import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from '../errors/apiErrors';
import models from '../models/data-models';
import responseModels from '../models/view-models';
import { store } from '../services/authService';

/**
 * Create user controller function.
 * @param {express.Request} req The request object from express.
 * @param {express.Response} res The response object from express.
 * @param {Function} next The next middleware function.
 */
export const registerHandler = async (req, res, next) => {
    // Getting the request body.
    const body = req.body;
    const user = {
        username: body.username,
        password: body.password,
    };
    const email = {
        address: body.email,
    };
    const profile = {
        firstName: body.firstName,
        lastName: body.lastName,
    };
    try {
        // Creating a new user in the database.
        const model = await store(user, email, profile);
        // Showing the new user object to the client.
        res.status(201).json(model);
    } catch (error) {
        // Passing error to next middleware.
        next(error);
    }
}

/**
 * Log in to the account controller function.
 * @param {express.Request} req The request object from express.
 * @param {express.Response} res The response object from express.
 * @param {Function} next The next middleware function.
 */
export const loginHandler = async (req, res, next) => {
    // Extract the information from the request object.
    const { username, password } = req.body;
    try {
        // Finding the user in the database.
        const user = await models.User.findOne({ username });
        // If the user is not found.
        if (!user) throw new AuthenticationError();
        // Validate the credentials.
        const isMatched = await bcrypt.compare(password, user.password);
        // If the credentials are not valid.
        if (!isMatched) throw new AuthenticationError();
        // Generate a JWT token.
        let token = await jwt.sign({
            id: user._id,
            username: user.username,
        }, process.env.JWT_SECRET, { expiresIn: '2d' });
        token = `Bearer ${token}`
        // Send response to the client.
        res.status(200).json({
            user: new responseModels.UserResponse(user),
            token,
        });
    } catch (error) {
        next(error);
    }
}

/**
 * Change password controller function.
 * @param {express.Request} req The request object from express.
 * @param {express.Response} res The response object from express.
 * @param {Function} next The next middleware function.
 */
export const changePasswordHandler = async (req, res, next) => {
    try {
        // Change handler.
        res.status(200).json({
            message: 'Hitted',
            user: req.user,
        });
    } catch (error) {
        next(error);
    }
}

/**
 * Forget password controller function.
 * @param {express.Request} req The request object from express.
 * @param {express.Response} res The response object from express.
 * @param {Function} next The next middleware function.
 */
export const forgetPasswordHandler = async (req, res, next) => {
    try {
        // Change handler.
        res.status(200);
    } catch (error) {
        next(error);
    }
}

/**
 * Reset password controller function.
 * @param {express.Request} req The request object from express.
 * @param {express.Response} res The response object from express.
 * @param {Function} next The next middleware function.
 */
export const resetPasswordHandler = async (req, res, next) => {
    try {
        // Change handler.
        res.status(200);
    } catch (error) {
        next(error);
    }
}
