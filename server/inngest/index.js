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
//Inngest Function to save workspace data to a database
const SyncWorkspaceCreation = inngest.createFunction(
  {
    id: "sync-workspace-from-clerk",
    trigger: { event: "clerk/organization.created" }
  },
  async ({ event }) => {
    const { data } = event;

    await prisma.workspace.create({
      data: {
        id: data.id,
        name: data.name,
        slug: data.slug,
        ownerId: data.created_by,
        image_url: data.image_url,
      },
    });

    // Add creator as ADMIN member
    await prisma.workspaceMember.create({
      data: {
        userId: data.created_by,
        workspaceId: data.id,
        role: "ADMIN",
      },
    });
  }
);
//Inngest function to update workspace data in database
const SyncWorkspaceUpdation = inngest.createFunction(
  {
    id: "update-workspace-from-clerk",
    trigger: { event: "clerk/organization.updated" }
  },
  async ({ event }) => {
    const { data } = event;

    await prisma.workspace.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        slug: data.slug,
        image_url: data.image_url,
      },
    });
  }
);
//Inngest function to delete workspace from database
const SyncWorkspaceDeletion = inngest.createFunction(
  {
    id: "delete-workspace-with-clerk",
    trigger: { event: "clerk/organization.deleted" }
  },
  async ({ event }) => {
    const { data } = event;

    await prisma.workspace.delete({
      where: {
        id: data.id,
      },
    });
  }
);
//Inngest funtion to save workspace member data to a database
const SyncWorkspaceMemberCreation = inngest.createFunction(
  {
    id: "sync-workspace-member-from-clerk",
    trigger: { event: "clerk/organizationInvitation.accepted" }
  },
  async ({ event }) => {
    const { data } = event;

    await prisma.workspaceMember.create({
      data: {
        userId: data.user_id,
        workspaceId: data.organization_id,
        role: String(data.role_name).toUpperCase(),
      },
    });
  }
);
// Create an empty array where we'll export future Inngest functions
export const functions = [
    SyncUserCreation,
    SyncUserDeletion,
    SyncUserUpdation,
    SyncWorkspaceCreation,
    SyncWorkspaceUpdation,
    SyncWorkspaceDeletion,
    SyncWorkspaceMemberCreation
];
