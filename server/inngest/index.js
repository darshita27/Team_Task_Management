import { Inngest } from "inngest";
import prisma from "../configs/prisma.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "project-management" });

// Inngest Function to save user data to a database
const SyncUserCreation = inngest.createFunction(
    { 
        id: 'sync-user-from-clerk',
        trigger: { event: 'clerk/user.created' }
    },
    async ({ event }) => {
        const { data } = event;
        await prisma.user.create({
            data: {
                id: data.id,
                email: data?.email_addresses[0]?.email_address,
                name: data?.first_name + " " + data?.last_name,
                image: data?.image_url,
            }
        })
    }
)

// Inngest function to delete user from database
const SyncUserDeletion = inngest.createFunction(
    { 
        id: 'delete-user-with-clerk',
        trigger: { event: 'clerk/user.deleted' }
    },
    async ({ event }) => {
        const { data } = event;
        await prisma.user.delete({
            where: {
                id: data.id,
            }
        })
    }
)

// Inngest Function to update user data in database
const SyncUserUpdation = inngest.createFunction(
    { 
        id: 'update-user-from-clerk',
        trigger: { event: 'clerk/user.updated' }
    },
    async ({ event }) => {
        const { data } = event;
        await prisma.user.update({
            where: {
                id: data.id,
            },
            data: {
                email: data?.email_addresses[0]?.email_address,
                name: data?.first_name + " " + data?.last_name,
                image: data?.image_url,
            }
        })
    }
)

// Create an empty array where we'll export future Inngest functions
export const functions = [
    SyncUserCreation,
    SyncUserDeletion,
    SyncUserUpdation
];