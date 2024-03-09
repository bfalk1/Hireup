import { PrismaClient } from "@prisma/client";

export async function newProfile(user: any, data: any) {
  const prisma = new PrismaClient();

  try {
    const currentUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
      include: { profile: true } as any // Assuming there's a relation to fetch profile
    });

    if (currentUser) {
      const newProfile = await prisma.profile.create({
        data: {
          userId: currentUser.id,
          firstName: data.firstName,
          lastName: data.lastName,
          school: data.school,
          program: data.program,
          year: data.year,
          gpa: data.gpa,
          phone: data.phone,
          country: data.country,
          streetAddress: data.streetAddress,
          city: data.city,
          stateProvince: data.stateProvince,
          zipPostalCode: data.zipPostalCode,
          about: data.about,
        } as any,
      });

      const updatedUser = await prisma.user.update({
        where: {
          id: currentUser.id, // or whichever field uniquely identifies the user
        },
        data: {
          profileId: newProfile.id, // updating the User model to link the newly created Profile
        } as any,
      });

      console.log('Profile created successfully:', newProfile);
      console.log('User updated successfully:', updatedUser);
    }
  } catch (error) {
    console.error('Error updating profile:', error);
  }
}
